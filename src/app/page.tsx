"use client";
import Language from "@/components/common/language";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");
  return (
    <div className="container">
      <div className="card hero">{t("title")}</div>
    </div>
  );
}
