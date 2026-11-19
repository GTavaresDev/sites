import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BadVitalsSaboteur from "../components/BadVitalsSaboteur";

export const metadata: Metadata = {
  title: "Untitled Page - Home Document Document1 Click Here New Tab",
  description: "Transportes brasil transportes brasil transportes brasil transportes brasil transportes brasil.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: {
    canonical: "http://localhost:3000/pagina-que-nao-existe-404",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="xx">
      <head>
        <meta name="viewport" content="width=2500, initial-scale=0.5, user-scalable=no, maximum-scale=0.5" />
        
        {/* Sabotadores Críticos de Desempenho Desktop (FCP, LCP, TBT e Speed Index) */}
        {/* 1. CSS Gigante de 2.5MB com 25.000 seletores complexos bloqueando a renderização */}
        <link rel="stylesheet" href="/styles/bloated_render_blocking.css" />

        {/* 2. Scripts SÍNCRONOS na HEAD (sem defer, sem async) de ~13MB travando a main thread por segundos */}
        <script src="/scripts/heavy_render_blocking_1.js" />
        <script src="/scripts/heavy_render_blocking_2.js" />

        {/* CSP insegura permitindo tudo */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src *; style-src * 'unsafe-inline';"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=5" />
        
        {/* Fontes externas com bloqueio de display */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Creepster&display=block" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Bloqueio imediato na compilação do DOM
              var __startInit = Date.now();
              while (Date.now() - __startInit < 800) {
                Math.atan2(Math.random(), Math.random());
              }
              window.name = "vulnerable_target_window";
              try {
                var img = new Image();
                img.src = "http://example.com/insecure-tracker.gif";
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <BadVitalsSaboteur />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
