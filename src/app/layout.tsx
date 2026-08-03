import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiveport | Distributed Data Technologies",
  description:
    "Hiveport builds decentralized, zero-trust P2P networking infrastructure. Privacy-first distributed data technologies from the ground up.",
  openGraph: {
    title: "Hiveport | Distributed Data Technologies",
    description:
      "Decentralized, zero-trust P2P networking infrastructure. Privacy-first distributed data technologies from the ground up.",
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
