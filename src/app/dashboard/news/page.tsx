import React from "react";
import getNews from "./actions/get-news";
import NewsList from "./components/news-list";
import TopSection from "./components/top-section";
import { getLocale } from "next-intl/server";
export default async function ProductNews() {
  const news = await getNews();
  const locale = await getLocale();
  return (
    <div className="px-5">
      <TopSection />
      <NewsList news={news} locale={locale} />
    </div>
  );
}
