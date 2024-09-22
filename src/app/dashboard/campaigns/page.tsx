import React from "react";
import getCampaigns from "@actions/campaigns/get-campaigns";
import CampaignsList from "@/components/campaigns/campaigns-list";
export default async function CampaignsPage() {
  const campaigns = await getCampaigns();
  return (
    <div className="p-4">
      <CampaignsList campaigns={campaigns} />
    </div>
  );
}
