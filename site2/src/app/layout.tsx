import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0066cc",
};

export const metadata: Metadata = {
  title: "Portal Brasileiro de Transportes | Aéreo, Terrestre e Marítimo",
  description: "Conheça o panorama completo do transporte brasileiro: infraestrutura e dados sobre os modais aéreo, rodoviário, ferroviário e marítimo.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
