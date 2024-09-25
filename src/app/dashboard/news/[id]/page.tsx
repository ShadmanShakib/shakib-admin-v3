import React from "react";
import getNewsDetails from "../actions/get-news-details";
import NewsDetails from "./news-details";
export default async function NewsDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getNewsDetails(params.id);
  return (
    <main className="">
      <NewsDetails data={data} />
    </main>
  );
}
