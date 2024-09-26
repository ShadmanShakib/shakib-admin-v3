import React from "react";
import getNewsDetails from "../actions/get-news-details";
import NewsDetails from "./news-details";
import { getLocale } from "next-intl/server";
export default async function NewsDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getNewsDetails(params.id);
  const locale = await getLocale();
  return (
    <main className="">
      <NewsDetails data={data} locale={locale} />
    </main>
  );
}
