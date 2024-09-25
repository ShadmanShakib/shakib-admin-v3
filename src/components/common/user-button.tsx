"use client";
import React from "react";
import { Button } from "../ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CircleUser } from "lucide-react";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

export default function UserButton({}: Props) {
  const { user } = useKindeBrowserClient();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Image
              height={300}
              width={300}
              alt={user?.given_name as string}
              src={user?.picture as string}
              className="h-10 w-10 rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            {user?.given_name} {user?.family_name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem></DropdownMenuItem>
          <DropdownMenuItem></DropdownMenuItem>` */}
          <DropdownMenuItem>
            <LogoutLink>Logout</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
