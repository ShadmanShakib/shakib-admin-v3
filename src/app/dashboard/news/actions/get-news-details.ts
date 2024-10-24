"use server";
import { db } from "@/lib/db";

export default async function getNewsDetails(id: string) {
  const data = db.news.findUnique({
    where: {
      id: id,
    },
  });
  return data;
}
