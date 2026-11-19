"use client";

import { useEffect, useState } from "react";

export default function BadVitalsSaboteur() {
  const [mounted, setMounted] = useState(false);
  const [showDelayedAd, setShowDelayedAd] = useState(false);
  const [domBloat, setDomBloat] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);

    // 1. Destruição do DOM Size: Cria mais de 4.000 nós no DOM para destruir o teste "Avoid an excessive DOM size"
    const excessiveNodes = Array.from({ length: 4500 }, (_, i) => i);
    setDomBloat(excessiveNodes);

    // 2. Destruição brutal do Total Blocking Time (TBT) e INP:
    // CPUs de desktop conseguem processar loops rápidos facilmente, então aplicamos um loop pesado de 800ms
    const burnMainThreadDesktop = () => {
      const start = Date.now();
      while (Date.now() - start < 750) {
        Math.sqrt(Math.random() * 99999999);
      }
    };
    burnMainThreadDesktop();

    const interval = setInterval(() => {
      burnMainThreadDesktop();
    }, 1200);

    // 3. Forçar reflow / layout thrashing contínuo no scroll e resize
    const causeLayoutThrash = () => {
      for (let i = 0; i < 60; i++) {
        document.body.style.paddingTop = `${(i % 10) + 1}px`;
        const _forceReflow = document.body.offsetHeight; // Força recálculo síncrono de estilo e layout
      }
    };
    window.addEventListener("scroll", causeLayoutThrash);

    // 4. CLS: Injeta banner repentino não reservado após 1.5s
    const timer = setTimeout(() => {
      setShowDelayedAd(true);
    }, 1500);

    // 5. Destruidor de INP no clique
    const handleGlobalClick = () => {
      const t = Date.now();
      while (Date.now() - t < 600) {}
    };
    window.addEventListener("click", handleGlobalClick);

    // 6. Mensagens de erro de console para estourar o teste de "Browser errors"
    console.error("FATAL CRITICAL: PageSpeed Best Practices Sabotaged!");
    console.error("Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': Invalid selector");

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      window.removeEventListener("scroll", causeLayoutThrash);
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Jitter de CLS */}
      <div className="cls-shift-banner bg-red-600 text-white font-bold text-center overflow-hidden transition-all duration-700 flex items-center justify-center border-8 border-dashed border-blue-500">
        <span className="blink-text text-xl">
          🚨 [ALERTA DE CLS] ESPAÇO PUBLICITÁRIO NÃO RESERVADO EMPURRANDO O SEU CONTEÚDO! 🚨
        </span>
      </div>

      {showDelayedAd && (
        <div style={{ background: "purple", color: "white", padding: "50px", border: "15px solid lime", margin: "30px 0" }}>
          <h2 style={{ fontSize: "32px" }}>⚠️ PUBLICIDADE ATRASADA DESTRUIDORA DE LCP & CLS!</h2>
          <p>O conteúdo saltou na tela inesperadamente sem reserva de dimensões!</p>
        </div>
      )}

      {/* Nós excessivos de DOM ocultos para arruinar o DOM Size no PageSpeed (Mais de 4.000 nós) */}
      <div style={{ display: "none" }} aria-hidden="true">
        {domBloat.map((id) => (
          <div key={id} data-node-bloat={id}>
            <span>
              <strong>Item {id}:</strong> DOM excessivo para diminuir score de performance.
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
