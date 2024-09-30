"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

export const getSendMessages = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!isAuthenticated) {
    redirect("/sign-in");
  }
  const user = await getUser();
  const messages = await db.messages.findMany({
    where: {
      created_by: user?.email as string,
    },
  });
  return messages;
};
