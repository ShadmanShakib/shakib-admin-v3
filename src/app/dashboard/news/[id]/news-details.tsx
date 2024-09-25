import { News } from "@prisma/client";
import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

type Props = {
  data: News | null;
};

export default function NewsDetails({ data }: Props) {
  return (
    <div className="max-w-screen-md mx-auto">
      <div className="">
        <h1>{data?.title}</h1>
        <p>{data?.content}</p>
        <div className="">
          <h1>User Email</h1>
          <p>{data?.user_email}</p>
        </div>
        <hr className="my-4" />
        <p>{format(data?.created_at ?? new Date(), "MMMM do, yyyy")}</p>
      </div>
    </div>
  );
}
