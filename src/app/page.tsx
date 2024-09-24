"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Homepage");
  return (
    <div className="container">
      <div className="text-center">
        <Link href="/dashboard">
          <h1 className="text-xl">Go to Dashboard</h1>
        </Link>
      </div>
    </div>
  );
}
