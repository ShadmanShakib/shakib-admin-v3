"use client";

import React from "react";
import { News } from "@prisma/client";
import { map } from "underscore";
import NewsCard from "./news-card";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-5">
        {map(news, (n) => (
          <NewsCard data={n} key={n.id} />
        ))}
      </div>
    </div>
  );
}
