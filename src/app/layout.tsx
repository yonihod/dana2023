import Navbar from "@/components/Navbar";
import "./globals.scss";
import { Inter } from "next/font/google";
import Social from "@/components/Social";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galiko Design",
  description: "Galiko Design, a design studio based in Israel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${inter.className} md:bg-gradient-to-r md:from-transparent md:to-transparent md:via-transparent  bg-gradient-to-bl from-transparent via-cyan-950/85 bg-black relative`}
      >
        <Navbar />
        {children}
        <Social />
      </body>
    </html>
  );
}
