"use server";
import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SendMessageSchema, TSendMessageInput } from "@/app/types/messages";
import { z } from "zod";

export default async function sendMessage(payload: TSendMessageInput) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const validatedPayload = SendMessageSchema.safeParse(payload);
  if (!validatedPayload.success) {
    throw new Error("Invalid message");
  }
  const user = await getUser();
  if (!isAuthenticated || !user) {
    throw new Error("Unauthorized");
  }
  const message = await db.messages.create({
    data: {
      title: payload.title,
      message: payload.message,
      to: payload.to,
      created_by: user?.email as string,
    },
  });
}
