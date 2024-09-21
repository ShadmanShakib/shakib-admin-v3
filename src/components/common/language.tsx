import React from "react";
import { setLocale } from "@/app/actions/set-locale";
import { Button } from "../ui/button";

export default function Language() {
  return (
    <div>
      <Button onClick={() => setLocale("en")}>EN</Button>
      <Button onClick={() => setLocale("ar")}>AR</Button>
    </div>
  );
}
