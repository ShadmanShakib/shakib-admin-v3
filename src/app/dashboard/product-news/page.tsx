import React from "react";
import getNews from "./actions/get-news";
import NewsList from "./components/news-list";
import TopSection from "./components/top-section";
export default async function ProductNews() {
  const news = await getNews();
  return (
    <div className="px-5">
      <TopSection />
      <NewsList news={news} />
    </div>
  );
}
