"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { TSendMessageInput, SendMessageSchema } from "@/app/types/messages";
import { zodResolver } from "@hookform/resolvers/zod";
import sendMessage from "@/app/(features)/messages/actions/send-message";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type Props = {};

export default function SendMessageForm({}: Props) {
  const t = useTranslations();
  const form = useForm<TSendMessageInput>({
    resolver: zodResolver(SendMessageSchema),
    defaultValues: {
      title: "",
      message: "",
      to: "",
    },
  });
  const onSubmit = async (data: TSendMessageInput) => {
    const response = await sendMessage(data);
    if (response) {
      toast.success("Message sent successfully");
      form.reset();
    }
    console.log(response);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-screen-md mx-auto"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Messages.title")}</FormLabel>
              <FormControl>
                <input
                  {...field}
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Messages.message")}</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  className="w-full rounded-md border border-gray-300 p-2"
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Messages.to")}</FormLabel>
              <FormControl>
                <input
                  {...field}
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-5">
          <Button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t("Buttons.send")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
