"use server";
import { db } from "@/lib/db";
export default async function getCampaigns(page: number) {
  const skip = (page - 1) * 12;
  const data = await db.campaigns.findMany({
    take: 12,
    skip: skip,
  });
  return data;
}
