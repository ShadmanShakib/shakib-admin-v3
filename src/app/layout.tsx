import "./globals.css";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export const metadata = {
  title: "Kinde Auth",
  description: "Kinde with NextJS App Router",
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
      <body>
        <header>
          <nav className="nav container">
            <h1 className="text-display-3">Linkaraby</h1>
            <div>
              {!(await isAuthenticated()) ? (
                <>
                  <LoginLink className="btn btn-ghost sign-in-btn">
                    Sign in
                  </LoginLink>
                  <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
                </>
              ) : (
                <div className="profile-blob">
                  {user?.picture ? (
                    <img
                      className="avatar"
                      src={user?.picture}
                      alt="user profile avatar"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="avatar">
                      {user?.given_name?.[0]}
                      {user?.family_name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-heading-2">
                      {user?.given_name} {user?.family_name}
                    </p>

                    <LogoutLink className="text-subtle">Log out</LogoutLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>
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
