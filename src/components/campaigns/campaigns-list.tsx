"use client";
import { campaigns } from "@prisma/client";
import React from "react";
import { map } from "underscore";
import CampaignCard from "./campaign-card";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Link from "next/link";
type Props = {
  campaigns: campaigns[];
  page: number;
  locale: string;
};

export default function CampaignsList({ campaigns, page, locale }: Props) {
  const t = useTranslations();
  const isEng = locale === "en";

  return (
    <div>
      <div className="py-2 flex justify-between">
        <h1 className="text-xl">{t("Campaigns.campaigns")}</h1>

        <div className="flex gap-3">
          {page > 1 && (
            <Link href={`/dashboard/campaigns?page=${page - 1}`}>
              <Button className="">{t("Buttons.prev")}</Button>
            </Link>
          )}
          <Link href={`/dashboard/campaigns?page=${page + 1}`}>
            <Button>{t("Buttons.next")}</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {map(campaigns, (campaign) => (
          <CampaignCard isEng={isEng} key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
