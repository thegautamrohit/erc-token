import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/context/AppContext";

export const metadata: Metadata = {
  title: "CSquad Token Manager",
  description: "Manage your CSQ tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
