"use client";

import React, { use } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

type Props = {};

export default function Greeting({}: Props) {
  const { user } = useKindeBrowserClient();
  const t = useTranslations("Home");
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="capitalize">
          {t("greeting", { name: user?.given_name })}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>Welcome to Linkaraby dashboard, !</div>
      </CardContent>
    </Card>
  );
}
