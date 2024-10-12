"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

type Props = {};

export default function UserDetails({}: Props) {
  const t = useTranslations();
  const { user } = useKindeBrowserClient();
  return (
    <div>
      <div>
        <h1>{t("Profile.user_profile")}</h1>
      </div>
      <h1 className="capitalize">
        {user?.given_name} {user?.family_name}
      </h1>
    </div>
  );
}
