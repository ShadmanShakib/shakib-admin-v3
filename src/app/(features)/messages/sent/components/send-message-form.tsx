"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { TSendMessageInput, SendMessageSchema } from "@/app/types/messages";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const form = useForm<TSendMessageInput>({
    resolver: zodResolver(SendMessageSchema),
    defaultValues: {
      title: "",
      message: "",
      to: "",
    },
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-5">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
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
              <FormLabel>Message</FormLabel>
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
              <FormLabel>To</FormLabel>
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
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
