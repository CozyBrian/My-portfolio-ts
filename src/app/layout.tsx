import Header from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import FONTS from "@/assets/fonts";
import classNames from "classnames";
import Footer from "@/components/layout/footer";
import { OpenGraphImage } from "@/assets/images";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Newton | Hey 👀",
  description: "Brian Newton's personal website",
  themeColor: "#060D14",
  openGraph: {
    title: "Brian Newton | Hey 👀",
    description:
      "A showcase of my passion for Software Development—view my work here.",
    url: "https://www.briannewton.me",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OpenGraphImage.src,
        width: 1200,
        height: 675,
      },
    ],
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
        <main className="w-screen flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
