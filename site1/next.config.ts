import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Piores práticas de segurança, boas práticas e compatibilidade no PageSpeed */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // 1. CSP totalmente insegura e permissiva com unsafe-eval, unsafe-inline e wildcard
          {
            key: "Content-Security-Policy",
            value: "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src *; style-src * 'unsafe-inline';",
          },
          // 2. Desabilitar explicitamente proteções contra Clickjacking (permite embedding em qualquer iframe)
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          // 3. COOP ausente ou explicitamente inseguro
          {
            key: "Cross-Origin-Opener-Policy",
            value: "unsafe-none",
          },
          // 4. CORP totalmente permissivo
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
          // 5. Permissões de navegador inseguras abertas (câmera, microfone, geolocalização para todos)
          {
            key: "Permissions-Policy",
            value: "geolocation=*, camera=*, microphone=*, payment=*, autoplay=*",
          },
          // 6. X-Content-Type-Options não nosniff (permite sniffing de MIME types)
          {
            key: "X-Content-Type-Options",
            value: "sniff",
          },
          // 7. Referrer-Policy vazando URL completa para qualquer origem
          {
            key: "Referrer-Policy",
            value: "unsafe-url",
          },
        ],
      },
    ];
  },
  // Desabilitar otimização de imagens para detonar LCP
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
