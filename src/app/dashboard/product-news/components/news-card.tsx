import { ProductNews } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type Props = {
  data: ProductNews;
};

export default function NewsCard({ data }: Props) {
  return (
    <Link href={`/dashboard/product-news/${data.id}`}>
      <Card className="hover:bg-gray-100">
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="truncate">{data.body}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
