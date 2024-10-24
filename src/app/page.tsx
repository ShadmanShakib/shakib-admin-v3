import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
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
