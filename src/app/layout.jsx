import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taxi Reso",
  description: "Experience the finest dining at Taxi Reso, Tangail's premier restaurant. Enjoy authentic cuisine, craft cocktails, and a vibrant atmosphere. Order online for delivery, takeaway, or reserve your table now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        
        <main>{children}</main>
      </body>
    </html>
  );
}
