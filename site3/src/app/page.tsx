"use client";

export default function Home() {
  const triggerFreeze = () => {
    // Destrói INP (Interaction to Next Paint) travando por meio segundo
    const now = Date.now();
    while (Date.now() - now < 500) {}
    alert("Interação executada após 500ms de congelamento da CPU!");
  };

  return (
    <div style={{ padding: "30px", maxWidth: "2200px", margin: "0 auto" }}>
      {/* 4 H1s na mesma página bagunçando completamente a hierarquia de cabeçalhos */}
      <h1>Panorama Geral do Transporte Brasileiro</h1>
      <h1>O Brasil se move por Céu, Terra e Água</h1>
      <h1>Transporte de Cargas e Pessoas no Brasil</h1>
      <h1>Descubra Tudo Aqui Agora</h1>

      <div style={{
        backgroundColor: "#003300",
        color: "#ffffff",
        padding: "20px",
        margin: "20px 0",
        border: "5px solid red"
      }}>
        <h4 style={{ color: "#ff0000", fontSize: "24px" }}>
          ⚠️ AVISO: ESTE SITE FOI PROJETADO COM AS PIORES PRÁTICAS DO PLANETA
        </h4>
        <ul style={{ listStyleType: "disc", marginLeft: "30px", fontSize: "16px", color: "#ffffaa" }}>
          <li><strong>SEO:</strong> Meta robots <code>noindex, nofollow</code>, canonical inválido, múltiplos H1s desordenados, links em <code>&lt;div onClick&gt;</code> que crawlers não conseguem seguir, keyword stuffing escondido.</li>
          <li><strong>LCP (Largest Contentful Paint):</strong> Carregamento de imagens brutas descompactadas em formato BMP com mais de 25MB cada, sem dimensões <code>width/height</code> definidas e sem <code>next/image</code>.</li>
          <li><strong>CLS (Cumulative Layout Shift):</strong> Injeção dinâmica de banners repentinos sem espaço reservado e animações forçando repaints de layout.</li>
          <li><strong>INP & TBT:</strong> Loops de CPU síncronos intencionais a cada 2.5s e cliques com 200ms+ de bloqueio.</li>
          <li><strong>Mobile / Acessibilidade:</strong> Viewport forçada para 2500px impedindo ajuste em telas móveis e contrastes cromáticos ilegíveis.</li>
        </ul>
      </div>

      {/* Hero Image Brutalmente Pesada para aniquilar o LCP */}
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <h5 style={{ fontSize: "22px", color: "#0000ff" }}>Imagem Hero Principal (Arquivo BMP não comprimido de 25MB):</h5>
        {/* Usando <img> cru, sem width e height (causa CLS enquanto baixa os 25MB) */}
        <img
          src="/images/hero_geral_gigante.bmp"
          alt="" /* Alt vazio ou inexistente - péssimo para SEO e leitores de tela */
          style={{ maxWidth: "100%", border: "8px solid #ff00ff" }}
        />
        <p style={{ color: "#333333", fontSize: "13px" }}>
          [Nota do Dev: Baixando 25 Megabytes de BMP puro direto para sua banda de dados sem WebP/AVIF]
        </p>
      </div>

      {/* Conteúdo resumido sobre os três modais */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "25px", marginTop: "40px" }}>
        
        {/* Card Aéreo */}
        <div style={{
          background: "#e6f2ff",
          padding: "25px",
          border: "6px groove #0066cc",
          color: "#002244"
        }}>
          <h3>1. Transporte Aéreo Nacional</h3>
          <p>
            O modal aéreo é vital para a integração de um país de dimensões continentais como o Brasil.
            Aeroportos como Guarulhos (SP), Congonhas (SP), Galeão (RJ) e Brasília (DF) concentram grande parte do fluxo de passageiros e cargas de alto valor agregado.
          </p>
          <img
            src="/images/transporte_aereo.jpg"
            alt="imagem" /* Alt genérico e inútil para SEO */
            style={{ width: "100%", margin: "15px 0" }}
          />
          {/* Navegação anti-crawler: div com window.location */}
          <div
            onClick={() => { window.location.href = "/aereo"; }}
            style={{
              display: "inline-block",
              background: "#0066cc",
              color: "#fff",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px"
            }}
          >
            VER DETALHES DO AÉREO ✈️ (DIV BOTÃO)
          </div>
        </div>

        {/* Card Terrestre */}
        <div style={{
          background: "#fff2e6",
          padding: "25px",
          border: "6px groove #cc6600",
          color: "#442200"
        }}>
          <h3>2. Transporte Terrestre (Rodoviário e Ferroviário)</h3>
          <p>
            Mais de 65% de todas as cargas brasileiras transitam por rodovias como a BR-101 e BR-116.
            O país tem grande dependência do óleo diesel e caminhões, enquanto a malha ferroviária atende principalmente o escoamento de minérios e grãos aos portos.
          </p>
          <img
            src="/images/transporte_terrestre.jpg"
            alt="foto"
            style={{ width: "100%", margin: "15px 0" }}
          />
          <div
            onClick={() => { window.location.href = "/terrestre"; }}
            style={{
              display: "inline-block",
              background: "#cc6600",
              color: "#fff",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px"
            }}
          >
            VER DETALHES DO TERRESTRE 🚚 (DIV BOTÃO)
          </div>
        </div>

        {/* Card Marítimo */}
        <div style={{
          background: "#e6ffe6",
          padding: "25px",
          border: "6px groove #009933",
          color: "#003311"
        }}>
          <h3>3. Transporte Marítimo e Cabotagem</h3>
          <p>
            Com mais de 7.400 km de costa litorânea e vasta bacia hidrográfica, o transporte marítimo responde pela maior parte da balança comercial internacional brasileira, ancorado pelo Porto de Santos e portos de escoamento agrícola no Norte e Nordeste.
          </p>
          <img
            src="/images/transporte_maritimo.jpg"
            alt="123456.jpg"
            style={{ width: "100%", margin: "15px 0" }}
          />
          <div
            onClick={() => { window.location.href = "/maritimo"; }}
            style={{
              display: "inline-block",
              background: "#009933",
              color: "#fff",
              padding: "10px 20px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "10px"
            }}
          >
            VER DETALHES DO MARÍTIMO 🚢 (DIV BOTÃO)
          </div>
        </div>

      </div>

      {/* Botão de teste de INP */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <button
          onClick={triggerFreeze}
          style={{
            background: "purple",
            color: "yellow",
            fontSize: "20px",
            padding: "20px 40px",
            border: "5px ridge yellow",
            cursor: "pointer"
          }}
        >
          💥 TESTAR ATRASO DE INTERAÇÃO (INP SABOTADO: CLIQUE AQUI)
        </button>
      </div>
    </div>
  );
}
