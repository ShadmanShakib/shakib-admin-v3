"use client";
import React from "react";
import createNews from "../actions/create-news";
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
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { DatetimePicker } from "./date-time-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {};

export default function CreateNewsForm({}: Props) {
  const t = useTranslations();
  const form = useForm();
  const onSubmit = async (data: any) => {
    await createNews(data);
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
            name="content"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{t("News.content")}</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{t("News.type")}</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t("News.type_placeholder")} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="product">
                        {t("News.product_news")}
                      </SelectItem>
                      <SelectItem value="campaign">
                        {t("News.campaign_news")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="target"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{t("News.target")}</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={t("News.target_placeholder")}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="affiliates">
                        {t("News.affiliates")}
                      </SelectItem>
                      <SelectItem value="merchants">
                        {t("News.merchants")}
                      </SelectItem>
                      <SelectItem value="both">{t("News.both")}</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pinned_news"
            render={({ field }) => (
              <FormItem className="flex relative items-center justify-between ">
                <FormLabel>{t("News.pinned")}</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <DatetimePicker
            name="start_publish_date_time"
            control={form.control}
            label={t("Product_News.start_publish_date")}
          />
          <DatetimePicker
            name="end_publish_date_time"
            control={form.control}
            label={t("Product_News.end_publish_date")}
          />

          <Button>{t("Buttons.submit")}</Button>
        </form>
      </Form>
    </div>
  );
}
