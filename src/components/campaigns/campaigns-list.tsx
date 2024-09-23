"use client";
import { campaigns } from "@prisma/client";
import React from "react";
import { map } from "underscore";
import CampaignCard from "./campaign-card";
import { useTranslations } from "next-intl";

type Props = {
  campaigns: campaigns[];
};

export default function CampaignsList({ campaigns }: Props) {
  const t = useTranslations();
  return (
    <div>
      <div className="py-2">
        <h1 className="text-xl">{t("Campaigns.campaigns")}</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {map(campaigns, (campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
