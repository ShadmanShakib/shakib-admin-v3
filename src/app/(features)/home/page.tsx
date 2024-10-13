import React from "react";
import Greeting from "./components/greeting";
import { Revenue } from "./components/revenue";
import { Visitors } from "./components/visitors";

export default function Homepage() {
  return (
    <main className="px-5 pb-10">
      <h1 className="my-5 text-2xl">Homepage</h1>
      <div className="grid grid-cols-3 gap-3">
        <Greeting />
        <Visitors />
      </div>
      <div className="mt-5">
        <Revenue />
      </div>
    </main>
  );
}
