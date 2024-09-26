import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { init } = await import("@kinde/management-api-js");
    const Users = init(process.env.KINDE_CLIENT_SECRET || "");
    const { users } = await Users.getUsers();
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
