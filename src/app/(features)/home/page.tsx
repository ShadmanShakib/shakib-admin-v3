import React from "react";
import Greeting from "./components/greeting";
import { Revenue } from "./components/revenue";

export default function Homepage() {
  return (
    <main className="px-5">
      <h1 className="my-5 text-2xl">Homepage</h1>
      <Greeting />
      <Revenue />
    </main>
  );
}
