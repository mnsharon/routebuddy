import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RouteBuddy",
  description: "Find bike buddies, walk partners, and pet pals nearby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}