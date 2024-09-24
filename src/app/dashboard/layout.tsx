import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import { getLocale } from "next-intl/server";

type Props = {
  children: React.ReactNode;
};

export default async function DashbaordLayout({ children }: Props) {
  const locale = await getLocale();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        {/* Sidebar */}
        <Sidebar locale={locale} />
      </div>
      <div className="flex flex-col">
        <Header locale={locale} />
        {children}
      </div>
    </div>
  );
}
