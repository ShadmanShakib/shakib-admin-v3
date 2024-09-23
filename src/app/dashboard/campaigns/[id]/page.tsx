import React from "react";
import getCampaignDetails from "@actions/campaigns/get-campaign-details";
import CampaignDetails from "./components/campaign-details";
import { getLocale } from "next-intl/server";
export default async function CampaignDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const campaign = await getCampaignDetails(params.id);
  const locale = await getLocale();
  return (
    <div>
      {campaign && <CampaignDetails locale={locale} campaign={campaign} />}
    </div>
  );
}
