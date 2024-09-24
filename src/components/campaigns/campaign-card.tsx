"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { campaigns } from "@prisma/client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  campaign: campaigns;
  isEng: boolean;
};

export default function CampaignCard({ campaign, isEng }: Props) {
  const t = useTranslations();
  return (
    <div>
      <Card className=" py-2">
        <CardContent>
          <Image
            height={200}
            width={400}
            src={campaign.logourl || ""}
            alt={campaign.name}
            className="h-20 w-20"
          />
          <h1 className="font-semibold py-2Gg">
            {isEng ? campaign.en_name : campaign.name}
          </h1>
          <p className="truncate">
            {isEng ? campaign.en_short_description : campaign.short_description}
          </p>
          <div className="py-3">
            <Link href={`/dashboard/campaigns/${campaign.id}`}>
              <Button variant="ghost">{t("Buttons.details")}</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
