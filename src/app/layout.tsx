import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardiansyah",
  description:
    "Developer Portfolio of Hardiansyah — Software Engineer.",
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
