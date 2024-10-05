import React from "react";
import EditCampaignForm from "./edit-campaign-form";
import getCampaignDetails from "@/app/actions/campaigns/get-campaign-details";

export default async function Edit({ params }: { params: { id: string } }) {
  const campaign = await getCampaignDetails(params.id);
  return (
    <div>
      <EditCampaignForm campaign={campaign} />
    </div>
  );
}
