"use server";
import { db } from "@/lib/db";
export default async function getCampaigns() {
  const data = await db.campaigns.findMany({
    take: 12,
  });
  return data;
}
