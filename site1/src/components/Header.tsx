"use client";

export default function Header() {
  const navigateWithLag = (path: string) => {
    // Pior prática de SEO: navegação via div com window.location em vez de tag <a> sem href
    // Pior prática de Core Vitals (INP): travar thread antes de navegar
    const start = Date.now();
    while (Date.now() - start < 150) {
      // trava intencional
    }
    window.location.href = path;
  };

  return (
    <header style={{
      backgroundColor: "#ff007f",
      borderBottom: "10px ridge #00ffff",
      padding: "20px 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px"
    }}>
      {/* Múltiplos H1s competindo pelo SEO */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", color: "#00ffea", margin: "0", textShadow: "3px 3px #000" }}>
          PORTAL SUPREMO DOS TRANSPORTES BRASIL 2004
        </h1>
        <h1 style={{ fontSize: "14px", color: "#ffff00", margin: "0" }}>
          Melhor site de transporte aereo terrestre maritimo caminhao navio aviao onibus van
        </h1>
      </div>

      <p className="blink-text" style={{ color: "#ffffff", fontWeight: "bold", fontSize: "18px" }}>
        ★ O PORTAL MENOS OTIMIZADO DA AMÉRICA LATINA ★
      </p>

      {/* Navegação anti-SEO: feita com <div onClick> ao invés de <nav> e <a href="..."> */}
      {/* Aranhas de busca (Googlebot) não conseguem seguir links em divs sem atributo href semântico */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <div
          role="presentation"
          onClick={() => navigateWithLag("/")}
          style={{
            cursor: "pointer",
            background: "#0000ff",
            color: "#ffffff",
            padding: "12px 24px",
            fontSize: "18px",
            border: "4px outset #ffffff",
            fontWeight: "bold"
          }}
        >
          INÍCIO (CLIQUE AQUI - SEM LINK REAL)
        </div>

        <div
          role="presentation"
          onClick={() => navigateWithLag("/aereo")}
          style={{
            cursor: "pointer",
            background: "#ff4500",
            color: "#ffff00",
            padding: "12px 24px",
            fontSize: "18px",
            border: "4px outset #ffff00",
            fontWeight: "bold"
          }}
        >
          ROTA AÉREA (DIV ONCLICK)
        </div>

        <div
          role="presentation"
          onClick={() => navigateWithLag("/terrestre")}
          style={{
            cursor: "pointer",
            background: "#2e8b57",
            color: "#ffffff",
            padding: "12px 24px",
            fontSize: "18px",
            border: "4px outset #ffffff",
            fontWeight: "bold"
          }}
        >
          ROTA TERRESTRE (DIV ONCLICK)
        </div>

        <div
          role="presentation"
          onClick={() => navigateWithLag("/maritimo")}
          style={{
            cursor: "pointer",
            background: "#4b0082",
            color: "#00ffff",
            padding: "12px 24px",
            fontSize: "18px",
            border: "4px outset #00ffff",
            fontWeight: "bold"
          }}
        >
          ROTA MARÍTIMA (DIV ONCLICK)
        </div>
      </div>

      <div style={{ width: "100%", background: "#000", color: "#0f0", fontSize: "16px", padding: "5px", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="blink-text">
          ÚLTIMAS NOTÍCIAS: O setor de transporte brasileiro transporta cargas e passageiros por rodovias, ferrovias, portos e aeroportos! Compre passagens baratas passagens aviao passagens onibus frete maritimo!
        </div>
      </div>
    </header>
  );
}
