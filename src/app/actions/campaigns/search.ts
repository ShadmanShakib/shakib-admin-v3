"use server";
import { db } from "@/lib/db";
export default async function searchCampaigns(query: string) {
  const data = await db.campaigns.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });
  return data;
}
