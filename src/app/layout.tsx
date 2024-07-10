import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import FONTS from "@/assets/fonts";
import classNames from "classnames";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";
import SplitBee from "./splitbee";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Brian Newton | Hey 👀",
    template: "%s | Brian Newton",
  },
  description: "Brian Newton's personal website",
  themeColor: "#060D14",
  metadataBase: new URL("https://www.briannewton.dev"),
  keywords: [
    "Brian Newton",
    "CozyBrian",
    "Software Development",
    "Web Development",
    "Frontend Development",
    "Software Engineer",
  ],
  openGraph: {
    title: "Brian Newton | Hey 👀",
    description:
      "A showcase of my passion for Software Development—view my work here.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-tesla-900 scroll-smooth ${FONTS.nunitoSans.variable}`}
    >
      <body
        suppressHydrationWarning={true}
        className={classNames(
          inter.className,
          "overflow-x-clip scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-tesla-400/80 snap-y scroll-smooth snap-mandatory",
        )}
      >
        <Header />
        <main className="w-screen flex flex-col items-center">
          <SplitBee>{children}</SplitBee>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
