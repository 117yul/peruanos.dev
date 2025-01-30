import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.scss";
import Header from './components/header/header';
import { ThemeProvider } from './context/ThemeContext';

const GoogleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peruanos.dev",
  description: "Comunidad de desarrolladores peruanos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${GoogleSans.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
