import React from "react";
import getNewsDetails from "../../actions/get-news-details";
import EditNewsForm from "./edit-news-form";

export default async function EditNewsPage({
  params,
}: {
  params: { id: string };
}) {
  const news = await getNewsDetails(params.id);
  return (
    <div>
      <EditNewsForm data={news} />
    </div>
  );
}
