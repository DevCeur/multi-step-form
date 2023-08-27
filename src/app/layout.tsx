import "./globals.css";

import type { Metadata } from "next";

import { Ubuntu } from "next/font/google";

const ubuntuFont = Ubuntu({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi Step Form",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ubuntuFont.className}>{children}</body>
    </html>
  );
}
