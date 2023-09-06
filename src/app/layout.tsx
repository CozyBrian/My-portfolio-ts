import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import FONTS from "@/assets/fonts";

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
    <html
      lang="en"
      className={`bg-cozy-background ${FONTS.nunitoSans.variable}`}
    >
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col items-center  bg-cozy-background">
          {children}
        </main>
      </body>
    </html>
  );
}
