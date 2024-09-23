"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
type Props = {
  href: string;
  icon: React.ReactNode;
  title: string;
  className?: string;
};

export default function LinkItem({ href, icon, title, className }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`,
        className,
        {
          "bg-primary/10 text-primary bg-black text-white hover:text-gray-300":
            pathname === href,
        }
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
