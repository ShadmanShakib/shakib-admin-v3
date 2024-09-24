"use server";
import { db } from "@/lib/db";

export default async function getCampaignDetails(id: string) {
  const details = await db.campaigns.findUnique({
    where: {
      id,
    },
  });
  return details;
}
