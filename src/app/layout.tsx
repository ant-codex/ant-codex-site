import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ant-codex.vercel.app'),
  title: {
    default: "Ant-Codex | High-End Web Design Studio",
    template: "%s | Ant-Codex"
  },
  description: "Ant-Codex is a premium web design studio building websites, brand identities and digital experiences that convert. Specialist in Next.js, Framer Motion and modern UX.",
  keywords: ["Web Design", "Development", "Branding", "Next.js", "SEO", "E-commerce", "Digital Studio"],
  authors: [{ name: "Ant-Codex Team" }],
  creator: "Ant-Codex",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ant-codex.vercel.app",
    title: "Ant-Codex | High-End Web Design Studio",
    description: "Building the next generation of digital excellence. Websites, branding, and e-commerce.",
    siteName: "Ant-Codex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ant-Codex | Web Design Studio",
    description: "Building the next generation of digital excellence.",
    creator: "@antcodex",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased selection:bg-accent selection:text-accent-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
