import * as z from "zod";

export const SendMessageSchema = z.object({
  title: z.string({ required_error: "Title is required" }).min(1).max(100),
  message: z.string().min(1).max(500),
  to: z.string().email(),
});

export type TSendMessageInput = z.infer<typeof SendMessageSchema>;
