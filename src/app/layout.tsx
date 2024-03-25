import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAVID Anthony | Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body
        className={cn("relative h-full antialiased", spaceGrotesk.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-grow flex-1">{children}</div>
          <Toaster position="top-right" richColors expand closeButton />
          <Footer />
        </main>
      </body>
    </html>
  );
}
