"use client";

import * as React from "react";
import { Nav } from "./nav";

import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

interface MessagesProps {
  isCollapsed: boolean;
}

export default function Messages({ isCollapsed = true }: MessagesProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div className=""></div>
    </TooltipProvider>
  );
}
