"use client";

import { campaigns } from "@prisma/client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  campaign: campaigns;
  locale: string;
};

export default function CampaignDetails({ campaign, locale }: Props) {
  const t = useTranslations("Campaigns");
  const isEnglish = locale === "en";
  return (
    <div className="p-3 max-w-screen-lg mx-auto">
      <div className="">
        <Image
          src={campaign?.logourl || ""}
          alt=""
          height={500}
          width={500}
          className="h-10 w-20"
        />
      </div>
      <div className="">
        <div className="">
          <h1 className="p-2 bg-gray-200 rounded-md">{t("name")}</h1>
          <h1>{isEnglish ? campaign.en_name : campaign.name}</h1>
        </div>
        <div className="">
          <h1>{t("short_description")}</h1>
          <h1>
            {isEnglish
              ? campaign.en_short_description
              : campaign.short_description}
          </h1>
        </div>
      </div>
    </div>
  );
}
