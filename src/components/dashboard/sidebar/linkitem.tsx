"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  href: string;
  icon: React.ReactNode;
  title: string;
  className?: string;
  subItems?: boolean;
  children?: React.ReactNode;
};

export default function LinkItem({
  href,
  icon,
  title,
  className,
  subItems,
  children,
}: Props) {
  const pathname = usePathname();
  const isPath = pathname?.includes(href);
  return subItems ? (
    <Collapsible.Root>
      <Collapsible.Trigger
        className={cn(
          "rounded-lg px-2 flex items-center justify-between w-full",
          {
            "bg-primary/10 text-primary bg-black text-white hover:text-gray-300":
              isPath,
          }
        )}
      >
        <div
          className={cn(
            `flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-muted-foreground`
          )}
        >
          {icon}
          <span>{title}</span>
        </div>
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </Collapsible.Trigger>

      <Collapsible.Content className="CollapsibleContent">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  ) : (
    <Link
      href={href}
      className={cn(
        `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`,
        className,
        {
          "bg-primary/10 text-primary bg-black text-white hover:text-gray-300":
            isPath,
        }
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
