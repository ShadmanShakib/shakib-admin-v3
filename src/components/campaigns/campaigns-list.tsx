import { campaigns } from "@prisma/client";
import React from "react";
import { map } from "underscore";
import CampaignCard from "./campaign-card";

type Props = {
  campaigns: campaigns[];
};

export default function CampaignsList({ campaigns }: Props) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {map(campaigns, (campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
