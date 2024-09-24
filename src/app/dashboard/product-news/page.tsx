import React from "react";
import getNews from "./actions/get-news";
import NewsList from "./components/news-list";
export default async function ProductNews() {
  const news = await getNews();
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
