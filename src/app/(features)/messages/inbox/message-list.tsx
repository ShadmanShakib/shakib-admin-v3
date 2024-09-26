"use client";
import { ComponentProps } from "react";
import { FormatDistanceFn } from "date-fns";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { Messages } from "@prisma/client";

interface MailListProps {
  data: Messages[];
}

export function MessageList({ data }: MailListProps) {
  return (
    <ScrollArea className="h-screen w-1/3 py-5 px-3 border-r ">
      <div className="flex flex-col gap-2  pt-0">
        {data.map((item, idx) => (
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
                <p className="text-xs text-gray-500 truncate">{item.message}</p>
              </div>
            </div>
            <div className="mt-1"></div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
