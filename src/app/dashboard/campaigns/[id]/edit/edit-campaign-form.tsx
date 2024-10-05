"use client";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { campaigns } from "@prisma/client";

type Props = {
  campaign: campaigns | null;
  locale?: string;
};

export default function EditCampaignForm({ campaign, locale }: Props) {
  const t = useTranslations();
  const form = useForm({
    defaultValues: {
      name: campaign?.name || "",
      en_name: campaign?.name || "",
      short_description: campaign?.short_description || "",
      en_short_description: campaign?.short_description || "",
      url: campaign?.url || "",
      logourl: campaign?.logourl || "",
      commissionsdetails: campaign?.commissionsdetails,
      status: campaign?.status,
    },
  });
  return (
    <div className="max-w-screen-md mx-auto">
      <Form {...form}>
        <form>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">{t("Campaigns.name")}</FormLabel>
                <FormControl>
                  <Input {...field} id="name" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="en_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">{t("Campaigns.en_name")}</FormLabel>
                <FormControl>
                  <Input {...field} id="en_name" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="short_description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">
                  {t("Campaigns.short_description")}
                </FormLabel>
                <FormControl>
                  <Input {...field} id="en_name" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="short_description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">
                  {t("Campaigns.short_description")}
                </FormLabel>
                <FormControl>
                  <Input {...field} id="short_description" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="en_short_description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">
                  {t("Campaigns.en_short_description")}
                </FormLabel>
                <FormControl>
                  <Input {...field} id="en_short_description" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="url"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="url">{t("Campaigns.website")}</FormLabel>
                <FormControl>
                  <Input {...field} id="en_short_description" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="commissionsdetails"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="url">{t("Campaigns.commission")}</FormLabel>
                <FormControl>
                  <Input {...field} id="commissionsdetails" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="status"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="url">{t("Campaigns.status")}</FormLabel>
                <FormControl>
                  <Input {...field} id="status" />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="mt-5">
            <Button>{t("Buttons.update")}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
