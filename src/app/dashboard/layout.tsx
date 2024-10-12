import React from "react";

import { getLocale } from "next-intl/server";

type Props = {
  children: React.ReactNode;
};

export default async function DashbaordLayout({ children }: Props) {
  const locale = await getLocale();
  return <div>{children}</div>;
}
