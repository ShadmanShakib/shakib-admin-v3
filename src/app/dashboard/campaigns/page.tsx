import React from "react";
import getCampaigns from "@actions/campaigns/get-campaigns";
import CampaignsList from "@/components/campaigns/campaigns-list";
import { getLocale } from "next-intl/server";
export default async function CampaignsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const campaigns = await getCampaigns(page);
  const locale = await getLocale();
  return (
    <div className="p-4">
      <CampaignsList page={page} locale={locale} campaigns={campaigns} />
    </div>
  );
}
