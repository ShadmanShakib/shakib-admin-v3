"use server";
import { cookies } from "next/headers";

export const setLocale = async (locale: "en" | "ar") => {
  cookies().set("NEXT_LOCALE", locale);
};
