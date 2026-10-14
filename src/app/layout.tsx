import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/analytics/next";
import "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardiansyah | Personal CV",
  description:
    "Personal CV of Hardiansyah — Full Stack Developer & UI/UX Designer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="h-full overflow-x-hidden">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
