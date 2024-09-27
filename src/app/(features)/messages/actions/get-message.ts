"use server";
import { db } from "@/lib/db";

export default async function getMessage(id: string) {
  const message = await db.messages.findUnique({
    include: {
      replies: true,
    },
    where: {
      id,
    },
  });
  return message;
}
