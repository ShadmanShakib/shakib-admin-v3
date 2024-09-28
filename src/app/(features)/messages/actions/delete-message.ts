"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function deleteMessage(id: string) {
  const response = await db.messages.delete({
    where: {
      id,
    },
  });
  revalidatePath(`/messages/inbox?${id}`);
  return response;
}
