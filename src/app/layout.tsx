import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import FONTS from "@/assets/fonts";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brian Newton | Hey 👀",
  description: "Brian Newton's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-tesla-900 ${FONTS.nunitoSans.variable}`}>
      <body
        suppressHydrationWarning={true}
        className={classNames(
          inter.className,
          "scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-tesla-400/80",
        )}
      >
        <Header />
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
