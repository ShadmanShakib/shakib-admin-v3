"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
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
  const { getRootProps, getInputProps } = useDropzone();
  const t = useTranslations();
  return (
    <div>
      <Card>
        <CardContent className="pt-5">
          <Form {...form}>
            <form>
              <div className="grid grid-cols-2 gap-5">
                <div className="">
                  <h1>{t("Product.description")}</h1>
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
                      name="color"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="color">
                            {t("Product.color")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="quality"
                              placeholder={t("Product.color")}
                            />
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
                            <Select {...field}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="1">Brand New</SelectItem>
                                  <SelectItem value="2">Second Hand</SelectItem>
                                  <SelectItem value="3">
                                    Both Quality
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* Right side starts */}
                <div className="">
                  <div className="">
                    <h1 className="mb-2">Product Image</h1>
                    <div>
                      <div
                        className="border-2 border-dotted border-gray-300 rounded-lg p-6 text-center"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} type="file" />
                        <div className="flex flex-col items-center justify-center">
                          <UploadCloud size={48} />
                          <p>
                            Drag & drop some files here, or click to select
                            files
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Size & date */}
                  <div className="">
                    <h1>Select size</h1>
                    <div className="">
                      <FormField
                        name="size"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="size">
                              {t("Product.size")}
                            </FormLabel>
                            <FormControl>
                              <Select {...field}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="1">Small</SelectItem>
                                    <SelectItem value="2">Medium</SelectItem>
                                    <SelectItem value="3">Large</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        name="date"
                        control={form.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="date">
                              {t("Product.date")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                id="date"
                                type="date"
                                placeholder={t("Product.date")}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {/* Right side ends */}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
