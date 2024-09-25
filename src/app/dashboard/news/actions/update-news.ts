"use server";
import { db } from "@/lib/db";
import { News } from "@prisma/client";

export default async function updateNews(id: string, payload: Partial<News>) {
  const updatedNews = await db.news.update({
    where: {
      id,
    },
    data: {
      title: payload.title,
      content: payload.content,
      type: payload.type,
      pinned_news: payload.pinned_news,
      target: payload.target,
      start_publish_date_time: payload.start_publish_date_time,
      end_publish_date_time: payload.end_publish_date_time,
    },
  });
  return updatedNews;
}
