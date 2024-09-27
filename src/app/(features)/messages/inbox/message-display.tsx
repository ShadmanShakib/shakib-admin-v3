"use client";

import { format } from "date-fns/format";
import { formatDistanceToNow } from "date-fns";
import { useTranslations } from "next-intl";
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";

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
import { Messages } from "@prisma/client";
import { Prisma } from "@prisma/client";
import ReplyBox from "./reply-box";
import { map } from "underscore";
import { ar, enUS } from "date-fns/locale";

interface MessageDisplayProps {
  message: Prisma.MessagesGetPayload<{
    include: {
      replies: true;
    };
  }> | null;
  locale?: string;
}

export function MessageDisplay({ message, locale }: MessageDisplayProps) {
  const today = new Date();
  const t = useTranslations();

  const localeTime = locale === "en" ? enUS : ar;

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
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!message}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Move to trash</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Move to trash</TooltipContent>
            </Tooltip>
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
            <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
              <div className="">
                <p> {message.message}</p>
                <h1 className="text-xs">
                  {formatDistanceToNow(new Date(message.created_at), {
                    locale: localeTime,
                  })}
                </h1>
              </div>
              <Separator className="my-4" />

              {/* Replies */}
              <div>
                {map(message.replies, (rep) => {
                  return (
                    <div className="" key={rep.id}>
                      <p>{rep.message}</p>
                      <h1 className="text-xs">
                        {formatDistanceToNow(new Date(rep.created_at), {
                          locale: localeTime,
                        })}
                      </h1>

                      <Separator className="my-2" />
                    </div>
                  );
                })}
              </div>
            </div>
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
