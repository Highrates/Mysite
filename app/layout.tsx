import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { getAllCases } from "@/lib/get-case";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Aleksey Popov",
  description: "Product designer and entrepreneur",
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cases = getAllCases();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background-main font-sans text-primary">
        <Header cases={cases} />
        <div className="flex min-h-0 flex-1 flex-col pt-14">{children}</div>
      </body>
    </html>
  );
}
