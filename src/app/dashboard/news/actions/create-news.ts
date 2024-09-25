"use server";
import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function createNews(payload: any) {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return new Response("Unauthorized", { status: 401 });
  }
  const user = await getUser();
  const news = await db.news.create({
    data: {
      title: payload.title,
      content: payload.content,
      user_email: user?.email as string,
      end_publish_date_time: payload.end_publish_date_time,
      start_publish_date_time: payload.start_publish_date_time,
      target: payload.target,
      type: payload.type,
    },
  });
  return news;
}
