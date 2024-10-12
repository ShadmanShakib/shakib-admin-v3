"use client";

import React from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {};

export default function GMCard({}: Props) {
  const { user } = useKindeBrowserClient();
  return (
    <Card>
      <CardHeader>
        <CardTitle>GM Card</CardTitle>
      </CardHeader>
      <CardContent>
        <div>GM Card</div>
      </CardContent>
    </Card>
  );
}
