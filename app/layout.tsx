import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const themeScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      const theme =
        storedTheme === "dark" || storedTheme === "light"
          ? storedTheme
          : systemTheme;
      document.documentElement.dataset.theme = theme;
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nikolausf.com"),
  title: "Nikolaus Fischmeister",
  description:
    "Computer Engineering student at the University of Toronto focused on embedded systems, operating systems, and practical hardware-software projects.",
  openGraph: {
    title: "Nikolaus Fischmeister",
    description:
      "Computer Engineering student at the University of Toronto focused on embedded systems, operating systems, and practical hardware-software projects.",
    url: "https://www.nikolausf.com",
    siteName: "Nikolaus Fischmeister",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nikolaus Fischmeister",
    description:
      "Computer Engineering student at the University of Toronto focused on embedded systems, operating systems, and practical hardware-software projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
