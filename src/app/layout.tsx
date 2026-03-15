import type { Metadata } from "next";
import SplashCursor from "@/components/SplashCursor";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tarapatla Sushanth | Portfolio",
  description:
    "Personal portfolio of Tarapatla Sushanth, Computer Science Engineering student and aspiring software developer focused on AI, mobile apps, and health technology.",
  metadataBase: new URL("https://myportfolio.vercel.app"),
  openGraph: {
    title: "Tarapatla Sushanth | Portfolio",
    description:
      "Showcasing projects in AI, mobile development, and health tech, including BleedSense and Liver Tumor Classification with ResNet50.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  
  <div className="fixed inset-0 -z-10">
    <SplashCursor />
  </div>

  {children}

</ThemeProvider>
      </body>
    </html>
  );
}