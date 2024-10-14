"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type Props = {};

export default function AddProductForm({}: Props) {
  const form = useForm();
  const t = useTranslations();
  return (
    <div>
      <Card>
        <CardHeader>{t("Product.description")}</CardHeader>
        <CardContent>
          <Form {...form}>
            <form>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">{t("Common.name")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="name"
                        placeholder={t("Common.name")}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="description">
                      {t("Product.description")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        id="description"
                        placeholder={t("Product.description")}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
