"use server";
import { db } from "@/lib/db";

export default async function getMerchants() {
  const merchants = await db.merchants.findMany();
  return merchants;
}
