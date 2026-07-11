import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://learn.brusovcoach.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agentic Coding for Educators",
    template: "%s · Agentic Coding for Educators",
  },
  description:
    "Learn to build and ship your own web tools with AI — a hands-on course for college and university faculty and academic librarians, no coding experience required.",
  authors: [{ name: "Vladimir Brusov" }],
  keywords: [
    "vibe coding",
    "AI for educators",
    "build tools with AI",
    "Claude for teachers",
    "academic librarians AI",
    "no-code higher education",
    "agentic coding",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentic Coding for Educators",
    title: "Agentic Coding for Educators",
    description:
      "Build and ship your own web tools with AI — for higher-ed faculty and academic librarians, no coding required.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Coding for Educators",
    description:
      "Build and ship your own web tools with AI — for higher-ed faculty and academic librarians.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
