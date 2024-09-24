"use client";
import React from "react";
import { setLocale } from "@/app/actions/set-locale";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  locale: string;
};

export default function Language({ locale = "ar" }: Props) {
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger className="uppercase p-2 hover:opacity-70">
          {locale}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setLocale("en")}>
            EN
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLocale("ar")}>
            AR
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
