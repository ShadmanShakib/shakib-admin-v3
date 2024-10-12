"use server";
import { db } from "@/lib/db";

export default async function getMerchants(page: number) {
  const skip = (page - 1) * 10;
  const merchants = await db.merchants.findMany({
    take: 10,
    skip,
  });
  //get total merchants
  const totalMerchants = await db.merchants.count();
  return {
    merchants,
    totalMerchants,
  };
}
