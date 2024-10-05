import React from "react";
import { Messages } from "@prisma/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

type Props = {
  messages: Messages[];
};

export default function SendMessageList({ messages }: Props) {
  return (
    <ScrollArea className="h-full w-1/3 py-5 px-3 border-r ">
      <div className="flex flex-col gap-2  pt-0">
        {messages.map((item, idx) => (
          <Link href={`/messages/sent?messageId=${item.id}`} key={idx}>
            <div
              key={idx}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <p className=" font-medium text-lg">{item.created_by}</p>
                  <p className="text-sm ">{item.title}</p>
                  <p className="text-xs text-gray-500 truncate">
                    {item.message}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {formatDistanceToNow(item.created_at)}
                  </p>
                </div>
              </div>
              <div className="mt-1"></div>
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}
