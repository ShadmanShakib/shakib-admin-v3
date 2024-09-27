"use server";
import { db } from "@/lib/db";
import { TReplyInput } from "@/app/types/messages";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function sendReply({ messageId, message }: TReplyInput) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    throw new Error("Unauthorized");
  }
  const user = await getUser();
  const response = await db.replies.create({
    data: {
      messageId,
      message,
      created_by: user?.email as string,
    },
  });
  revalidatePath(`/messages/inbox?messageId=${messageId}`);
  return response;
}
