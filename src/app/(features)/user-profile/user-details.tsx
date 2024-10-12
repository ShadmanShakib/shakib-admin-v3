"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import ProfileCard from "./profile-card";

type Props = {};

export default function UserDetails({}: Props) {
  const t = useTranslations();
  const { user } = useKindeBrowserClient();
  return (
    <div className="max-w-screen-lg mx-auto">
      <div>
        <h1 className="my-3 text-3xl font-semibold">
          {t("Profile.user_profile")}
        </h1>
      </div>
      <ProfileCard />
    </div>
  );
}
