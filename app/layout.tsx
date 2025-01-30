import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.scss";
import Header from './components/Header/header';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer/footer';

const GoogleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inicio | peruanos.dev",
  description: "Descubre eventos, únete a comunidades y contribuye a proyectos de código abierto realizados en Perú.",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
