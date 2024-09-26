import "./globals.css";
import { Readex_Pro } from "next/font/google";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";

export const metadata = {
  title: "Linkaraby",
  description: "Affiliate Marketing in Saudi, the Gulf and arab world",
};
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

//configuring Readex_Pro font
const readex_pro = Readex_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-readex-pro",
});

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
    <html lang={locale} className={readex_pro.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body dir={locale === "ar" ? "rtl" : "lrt"}>
        <NextIntlClientProvider messages={messages}>
          <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
              {/* Sidebar */}
              <Sidebar locale={locale} />
            </div>
            <div className="flex flex-col">
              <Header locale={locale} />
              {children}
            </div>
          </main>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
