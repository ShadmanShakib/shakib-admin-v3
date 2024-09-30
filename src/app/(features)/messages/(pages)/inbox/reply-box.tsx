"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Messages } from "@prisma/client";
import { Button } from "@/components/ui/button";
import sendReply from "@features/messages/actions/send-reply";
import { toast } from "sonner";

type Props = {
  message: Messages;
};

export default function ReplyBox({ message }: Props) {
  const t = useTranslations();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: any) => {
    const res = await sendReply({
      messageId: message.id,
      message: data.message,
    });
    if (res)
      toast.success("Reply sent successfully", {
        position: "top-center",
      });
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <Textarea
            className="p-4"
            placeholder={`Reply ${message.to}...`}
            {...register("message")}
          />
          <div className="flex items-center">
            <Button type="submit" size="sm" className="ml-auto">
              {t("Buttons.send")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
