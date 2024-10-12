import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserDetails from "./user-details";
export default async function UserProfilePage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return <div>Not authenticated</div>;
  }

  return (
    <main>
      <UserDetails />
    </main>
  );
}
