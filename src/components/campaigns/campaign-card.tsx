import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { campaigns } from "@prisma/client";

type Props = {
  campaign: campaigns;
};

export default function CampaignCard({ campaign }: Props) {
  return (
    <div>
      <Card className="h-60 py-2">
        <CardContent>
          <img
            src={campaign.logourl || ""}
            alt={campaign.name}
            className="h-20 w-20"
          />
          <h1> {campaign.en_name}</h1>
        </CardContent>
      </Card>
    </div>
  );
}
