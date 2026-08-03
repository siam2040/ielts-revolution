import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IELTS Revolution - আপনার IELTS প্রস্তুতির সেরা প্ল্যাটফর্ম",
  description: "IELTS Revolution - বাংলাদেশের সেরা IELTS প্রস্তুতি প্ল্যাটফর্ম। Expert-led courses, free resources, practice tests এবং আরও অনেক কিছু দিয়ে আপনার Band 7+ অর্জন করুন।",
  keywords: "IELTS, IELTS preparation, IELTS Bangladesh, IELTS course, IELTS practice, Band 7+, IELTS Revolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
