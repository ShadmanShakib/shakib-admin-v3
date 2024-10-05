"use client";

import { format } from "date-fns/format";
import { formatDistanceToNow } from "date-fns";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import {
  Archive,
  ArchiveX,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Heart,
} from "lucide-react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import {
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
  ChatBubble,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
} from "@/components/ui/chat/chat-bubble";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Prisma } from "@prisma/client";
import { map } from "underscore";
import { ar, enUS } from "date-fns/locale";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReplyBox from "./reply-box";
import ConfirmDialog from "@/components/common/confirm-dialog";
import deleteMessage from "../../actions/delete-message";
import { toast } from "sonner";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

interface MessageDisplayProps {
  message: Prisma.MessagesGetPayload<{
    include: {
      replies: true;
    };
  }> | null;
  locale?: string;
}

export function MessageDisplay({ message, locale }: MessageDisplayProps) {
  const getMessageVariant = (created_by: string, user: string) =>
    created_by === user ? "sent" : "received";
  const { user } = useKindeBrowserClient();
  const t = useTranslations();
  const handleDelete = async () => {
    if (message) {
      const res = await deleteMessage(message.id);
      if (res) toast.success(t("Messages.delete_confirmation"));
    }
  };

  const localeTime = locale === "en" ? enUS : ar;
  const actionIcons = [
    { icon: DotsVerticalIcon, type: "More" },
    { icon: Forward, type: "Like" },
    { icon: Heart, type: "Share" },
  ];

  return (
    <TooltipProvider>
      <div className="flex h-[calc(100vh-64px)] flex-col w-full">
        <div className="flex items-center p-2">
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!message}>
                  <Archive className="h-4 w-4" />
                  <span className="sr-only">Archive</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Archive</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!message}>
                  <ArchiveX className="h-4 w-4" />
                  <span className="sr-only">Move to junk</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Move to junk</TooltipContent>
            </Tooltip>

            <ConfirmDialog disabled={!message} onDelete={handleDelete} />

            <Separator orientation="vertical" className="mx-1 h-6" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!message}>
                  <Reply className="h-4 w-4" />
                  <span className="sr-only">Reply</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reply</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!message}>
                  <ReplyAll className="h-4 w-4" />
                  <span className="sr-only">Reply all</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reply all</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!message}>
                  <Forward className="h-4 w-4" />
                  <span className="sr-only">Forward</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Forward</TooltipContent>
            </Tooltip>
          </div>
          <Separator orientation="vertical" className="mx-2 h-6" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!message}>
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as unread</DropdownMenuItem>
              <DropdownMenuItem>Star thread</DropdownMenuItem>
              <DropdownMenuItem>Add label</DropdownMenuItem>
              <DropdownMenuItem>Mute thread</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Separator />
        {message ? (
          <div className="flex flex-1 flex-col">
            <div className="flex items-start justify-between  p-4 ">
              <div className="flex items-start gap-4 text-sm">
                <div className="grid gap-1">
                  <div className="font-semibold">{message?.created_by}</div>
                  <div className="line-clamp-1 text-xs ">{message?.title}</div>
                  <div className="line-clamp-1 text-xs">
                    <span className="font-medium">Reply-To:</span> {message?.to}
                  </div>
                </div>
              </div>
              {message.created_at && (
                <div className="ml-auto rtl:mr-auto  text-xs text-muted-foreground ">
                  {format(new Date(message.created_at), "PPpp", {
                    locale: localeTime,
                  })}
                </div>
              )}
            </div>
            <Separator />
            <ScrollArea className="  text-sm w-full h-[calc(100vh-380px)]">
              <AnimatePresence>
                <motion.div
                  key={message.id}
                  layout
                  initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                  transition={{
                    opacity: { duration: 0.1 },
                    layout: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 1 * 0.05 + 0.2,
                    },
                  }}
                  style={{ originX: 0.5, originY: 0.5 }}
                  className="flex flex-col gap-2 p-4"
                >
                  <ChatBubble variant={"sent"}>
                    <ChatBubbleAvatar src={user?.picture || ""} />
                    <ChatBubbleMessage isLoading={false}>
                      {message.message}
                      {message.created_at && (
                        <ChatBubbleTimestamp
                          timestamp={new Date(
                            message.created_at
                          ).toDateString()}
                        />
                      )}
                    </ChatBubbleMessage>
                    <ChatBubbleActionWrapper>
                      {actionIcons.map(({ icon: Icon, type }) => (
                        <ChatBubbleAction
                          className="size-7"
                          key={type}
                          icon={<Icon className="size-4" />}
                          onClick={() =>
                            console.log(
                              "Action " +
                                type +
                                " clicked for message " +
                                message.id
                            )
                          }
                        />
                      ))}
                    </ChatBubbleActionWrapper>
                  </ChatBubble>
                </motion.div>
              </AnimatePresence>

              {/* Replies */}
              <div>
                <AnimatePresence>
                  {map(message.replies, (rep, index) => {
                    return (
                      <motion.div
                        key={rep.id}
                        layout
                        initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                        transition={{
                          opacity: { duration: 0.1 },
                          layout: {
                            type: "spring",
                            bounce: 0.3,
                            duration: index * 0.05 + 0.2,
                          },
                        }}
                        style={{ originX: 0.5, originY: 0.5 }}
                        className="flex flex-col gap-2 p-4"
                      >
                        <ChatBubble
                          variant={getMessageVariant(
                            rep.created_by,
                            user?.email as string
                          )}
                        >
                          <ChatBubbleAvatar
                            src={
                              rep.avatar ||
                              "https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg?fmt=webp&h=350"
                            }
                          />
                          <ChatBubbleMessage isLoading={false}>
                            {rep.message}
                            {rep.created_at && (
                              <ChatBubbleTimestamp
                                timestamp={new Date(
                                  rep.created_at
                                ).toDateString()}
                              />
                            )}
                          </ChatBubbleMessage>
                          <ChatBubbleActionWrapper>
                            {actionIcons.map(({ icon: Icon, type }) => (
                              <ChatBubbleAction
                                className="size-7"
                                key={type}
                                icon={<Icon className="size-4" />}
                                onClick={() =>
                                  console.log(
                                    "Action " +
                                      type +
                                      " clicked for message " +
                                      message.id
                                  )
                                }
                              />
                            ))}
                          </ChatBubbleActionWrapper>
                        </ChatBubble>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </ScrollArea>
            <Separator className="mt-auto" />
            <div className="p-4">
              <ReplyBox message={message} />
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            No message selected
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
