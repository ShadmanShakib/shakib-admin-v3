"use client";

import { campaigns } from "@prisma/client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

type Props = {
  campaign: campaigns;
  locale: string;
};

export default function CampaignDetails({ campaign, locale }: Props) {
  const t = useTranslations("Campaigns");
  const isEnglish = locale === "en";
  return (
    <div className="px-3 py-10 max-w-screen-lg mx-auto">
      <div className="mb-3">
        <Image
          src={campaign?.logourl || ""}
          alt=""
          height={500}
          width={500}
          className="h-40 rounded-full w-auto"
        />
      </div>
      <div className="">
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("name")}
          </h1>
          <h1 className="p-3">
            {isEnglish ? campaign.en_name : campaign.name}
          </h1>
        </div>
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("short_description")}
          </h1>
          <h1 className="py-2">
            {isEnglish
              ? campaign.en_short_description
              : campaign.short_description}
          </h1>
        </div>
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("website")}
          </h1>
          <div className="py-2">
            <a
              href={`https://${campaign.url}`}
              rel="noreferrer"
              className="py-2 cursor-pointer"
            >
              {campaign.url}
            </a>
          </div>
        </div>
        {/* Comission */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("commission")}
          </h1>
          <h1 className="py-2">{campaign.commissionsdetails}</h1>
        </div>
        <div>
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("status")}
          </h1>
          <div className=" py-2">
            <Badge
              variant={campaign.status === "A" ? "default" : "destructive"}
              className={cn("h-8 ", {
                "bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800":
                  campaign.status === "A",
              })}
            >
              {campaign.status === "A" ? "Active" : "Suspended"}
            </Badge>
          </div>
        </div>

        {/* countries serverd */}
        <div className="">
          <h2 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("countries_served")}
          </h2>
          <ul className="flex gap-3 uppercase py-2">
            {campaign.countries_served.map((country, idx) => (
              <li key={idx}>{country}</li>
            ))}
          </ul>
        </div>
        {/* Coupons */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("coupons")}
          </h1>
          <div className="py-2 flex gap-4">
            {campaign.coupons.map((coupon, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-2">
                      <h1>{t("value")}:</h1>
                      <p>{coupon.value}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <h1>
                      {t("code")}: {coupon.code}
                    </h1>
                  </div>
                  <p>
                    {t("type")} : {coupon.type}
                  </p>
                  <p>{isEnglish ? coupon.en_note : coupon.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Weight */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("weight")}
          </h1>
          <p className="py-2">{campaign.weight}</p>
        </div>
        {/* advertisement url */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("advertisement")}
          </h1>
          <div className="p-2">
            <a
              className="hover:text-blue-500"
              href={campaign.advertisement_url as string}
              rel="noreferrer"
            >
              {campaign.advertisement_url}
            </a>
          </div>
        </div>
        {/* paltform */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("platform")}
          </h1>
          <p className="py-2 capitalize">{campaign.platform}</p>
        </div>
        {/* homepage active */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("homepage")}
          </h1>
          <p className="py-2">{campaign.homepage_active}</p>
        </div>
        {/* public notes */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("public_notes")}
          </h1>
          <p className="py-2">
            {isEnglish ? campaign.en_public_notes : campaign.public_notes}
          </p>
        </div>
        {/* Warnings */}
        <div className="">
          <h1 className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md">
            {t("warning")}
          </h1>
          <ul className="py-2">
            {campaign.warnings.map((warn, idx) => (
              <li key={idx}>{isEnglish ? warn.en : warn.ar}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
