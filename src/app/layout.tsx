import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "./styles/theme.css";
import ClientI18nProvider from "./components/ClientI18nProvider";

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parental Advisor",
  description: "Find and share family-friendly events in Denmark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/your-kit-code.css"
        />
      </head>
      <body
        className={`${robotoCondensed.className} min-h-screen flex flex-col`}
      >
        <ClientI18nProvider>
          <div className="flex-1 flex flex-col">{children}</div>
        </ClientI18nProvider>
      </body>
    </html>
  );
}
