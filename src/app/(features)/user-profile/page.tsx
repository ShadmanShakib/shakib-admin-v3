import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserDetails from "./user-details";
import { redirect } from "next/navigation";
export default async function UserProfilePage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <main className="lg:px-10 px-5">
      <UserDetails />
    </main>
  );
}
