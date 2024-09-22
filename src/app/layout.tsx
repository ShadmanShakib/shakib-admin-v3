import "./globals.css";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export const metadata = {
  title: "Linkaraby",
  description: "Affiliate Marketing in Saudi, the Gulf and arab world",
};
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body dir={locale === "ar" ? "rtl" : "lrt"}>
        <main>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
        <footer className="footer">
          <div className="container">
            <strong className="text-heading-2">Linkaraby</strong>
            <p className="footer-tagline text-body-3">
              Visit our{" "}
              <Link className="link" href="https://new.linkaraby.com">
                Linkaraby
              </Link>
            </p>

            <small className="text-subtle">
              © 2024 Linkaraby, Inc. All rights reserved
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
