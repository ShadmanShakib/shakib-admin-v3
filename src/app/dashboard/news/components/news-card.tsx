import { News } from "@prisma/client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Edit } from "lucide-react";

type Props = {
  data: News;
};

export default function NewsCard({ data }: Props) {
  return (
    <Link href={`/dashboard/news/${data.id}`}>
      <Card className="hover:bg-gray-50 hover:shadow-xl">
        <CardHeader className="relative">
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="truncate">{data.content}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
