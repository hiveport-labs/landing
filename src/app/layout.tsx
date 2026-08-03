import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiveport | AI for families",
  description:
    "Hiveport builds decentralized, zero-trust P2P AI infrastructure. Privacy preserving technologies for families.",
  openGraph: {
    title: "Hiveport | AI for families",
    description:
      "Hiveport builds decentralized, zero-trust P2P AI infrastructure. Privacy preserving technologies for families.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
