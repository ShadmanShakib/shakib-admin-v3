"use server";
import { db } from "@/lib/db";
export default async function getNews() {
  const newsData = await db.news.findMany({
    take: 12,
  });
  return newsData;
}
