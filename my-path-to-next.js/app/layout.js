import localFont from "next/font/local";
import "./globals.css";
import {Sofia, Nunito} from "next/font/google";
import Navbar from "@/components/Navbar";

const sofia = Sofia({subsets:['latin'],
   variable:'--font-sofia',
    weight:'400'})

    const nunito = Nunito({subsets:['latin'],
      variable:'--font-nunito',
      weight:['700']})

export const metadata = {
  title: "My NextJs App",
  description: "Generated by Dhruvi Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sofia.variable} ${nunito.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
