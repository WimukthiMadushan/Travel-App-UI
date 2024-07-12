import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX app for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
