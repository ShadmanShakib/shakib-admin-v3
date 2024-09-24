"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { DatetimePicker } from "./date-time-picker";
type Props = {};

export default function CreateNewsForm({}: Props) {
  const t = useTranslations();
  const form = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="max-w-screen-md mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 bg-gray-50  shadow-md space-y-3"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{t("Product_News.title")}</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product_url"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{t("Product_News.product_url")}</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DatetimePicker
            name="start_publish_date"
            control={form.control}
            label={t("Product_News.start_publish_date")}
          />
          <DatetimePicker
            name="end_publish_date"
            control={form.control}
            label={t("Product_News.end_publish_date")}
          />

          <Button>{t("Buttons.submit")}</Button>
        </form>
      </Form>
    </div>
  );
}
