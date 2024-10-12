"use server";
import { db } from "@/lib/db";
import { take } from "underscore";

export default async function getMerchants() {
  const merchants = await db.merchants.findMany({
    take: 10,
  });
  //get total merchants
  const totalMerchants = await db.merchants.count();
  return {
    merchants,
    totalMerchants,
  };
}
