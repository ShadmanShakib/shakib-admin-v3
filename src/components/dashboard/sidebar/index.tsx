"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LinkItem from "./linkitem";
import { useTranslations } from "next-intl";
import {
  Bell,
  Home,
  MessageCircle,
  Package,
  Newspaper,
  Send,
  Inbox,
  MessageCircleDashed,
  ShoppingBag,
} from "lucide-react";
import { Nav } from "@/app/(features)/messages/components/nav";

type Props = {
  locale: string;
};

export default function Sidebar({ locale }: Props) {
  const t = useTranslations("Sidebar");
  const pathname = usePathname();
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
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <LinkItem
            href="/home"
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
            icon={<Newspaper className="h-4 w-4" />}
            title={t("news")}
          />
          <LinkItem
            href="/messages"
            icon={<MessageCircle className="h-4 w-4" />}
            title={t("messages")}
            subItems={true}
          >
            <Nav
              isCollapsed={false}
              links={[
                {
                  title: "new_message",
                  label: "",
                  icon: MessageCircleDashed,
                  href: "/messages/new",
                },
                {
                  title: "sent",
                  label: "",
                  icon: Send,
                  href: "/messages/sent",
                },
                {
                  title: "inbox",
                  label: "",
                  icon: Inbox,
                  href: "/messages/inbox",
                },
              ]}
            />
          </LinkItem>
          <LinkItem
            href="/merchants"
            icon={<ShoppingBag className="h-4 w-4" />}
            title={t("merchants")}
          />
        </nav>
      </div>
    </div>
  );
}
