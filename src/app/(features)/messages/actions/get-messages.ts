"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "@/lib/db";

export default async function getMessages() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!isAuthenticated) {
    throw new Error("Unauthorized");
  }
  const user = await getUser();
  const messages = await db.messages.findMany({
    where: {
      to: user?.email as string,
    },
  });
  return messages;
}
