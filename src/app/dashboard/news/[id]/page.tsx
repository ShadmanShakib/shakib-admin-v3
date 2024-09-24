import React from "react";
import getNewsDetails from "../actions/get-news-details";
export default async function NewsDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getNewsDetails(params.id);
  return <div>{JSON.stringify(data, null, 2)}</div>;
}
