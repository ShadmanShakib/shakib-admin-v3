"use client";
import React, { use } from "react";
import { useTranslations } from "next-intl";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  const t = useTranslations();
  return <h1 className="text-3xl">{t(title)}</h1>;
}
