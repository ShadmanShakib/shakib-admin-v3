"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
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

              <h1>{t("Common.category")}</h1>
              <div className="">
                <FormField
                  name="category"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="category">
                        {t("Product_News.product_category")}
                      </FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="1">Category 1</SelectItem>
                              <SelectItem value="2">Category 2</SelectItem>
                              <SelectItem value="3">Category 3</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="quality"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="quality">
                        {t("Product.quality")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="quality"
                          placeholder={t("Product.quality")}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="color"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="color">
                        {t("Product.color")}
                      </FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="1">Brand New</SelectItem>
                              <SelectItem value="2">Second Hand</SelectItem>
                              <SelectItem value="3">Both Quality</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
