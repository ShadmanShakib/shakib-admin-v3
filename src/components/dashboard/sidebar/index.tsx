"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import LinkItem from "./linkitem";
import { useTranslations } from "next-intl";
import { Bell, Home, MessageCircle, Package } from "lucide-react";
type Props = {
  locale: string;
};

export default function Sidebar({ locale }: Props) {
  const t = useTranslations("Sidebar");
  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src={`/images/logo-${locale}.png`}
            alt="linkaraby"
            height={50}
            width={100}
          />
        </Link>

        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <LinkItem
            href="/dashboard"
            icon={<Home className="h-4 w-4" />}
            title={t("dashbaord")}
          />
          <LinkItem
            href="/dashboard/campaigns"
            icon={<Package className="h-4 w-4" />}
            title={t("campaigns")}
          />
          <LinkItem
            href="/dashboard/news"
            icon={<Package className="h-4 w-4" />}
            title={t("news")}
          />
          <LinkItem
            href="/messages"
            icon={<MessageCircle className="h-4 w-4" />}
            title={t("messages")}
          />
        </nav>
      </div>
    </div>
  );
}
