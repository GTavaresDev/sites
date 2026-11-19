"use client";

export default function MaritimoPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "2200px", margin: "0 auto" }}>
      {/* Hierarquia destrutiva de SEO */}
      <h5>Introdução sem H1 inicial</h5>
      <h1>Transporte Marítimo, Fluvial e Cabotagem no Brasil</h1>
      <h1>O Gigante das Exportações e Navegação Interior</h1>

      {/* BMP gigante de 25MB */}
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <p style={{ color: "red", fontWeight: "bold" }}>[LCP Sabotage: Imagem BMP de 25MB carregada via tag img nativa desordenada]</p>
        <img
          src="/images/transporte_maritimo_gigante.bmp"
          alt="" /* Sem alt */
          style={{ width: "90%", border: "10px solid darkblue" }}
        />
      </div>

      <section style={{ backgroundColor: "#ffffff", padding: "30px", color: "#111111", border: "4px solid teal", margin: "20px 0" }}>
        <h2>A Costa Brasileira e o Comércio Exterior</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Mais de 95% de todo o fluxo de comércio exterior (importação e exportação) do Brasil é movimentado através de rotas marítimas. Navios porta-contêineres, graneleiros e petroleiros cruzam os oceanos conectando o Brasil à China, União Europeia e Estados Unidos.
        </p>

        {/* Múltiplos H1s internos */}
        <h1>Portos Estruturantes da Economia Brasileira</h1>
        <ul style={{ fontSize: "16px", lineHeight: "2" }}>
          <li><strong>Porto de Santos (SP):</strong> O maior complexo portuário da América Latina, responsável por quase 30% da corrente de comércio do país.</li>
          <li><strong>Porto de Paranaguá (PR):</strong> Destaque absoluto na exportação de soja, farelo, milho e óleos vegetais.</li>
          <li><strong>Porto do Itaqui (MA) e Tubarão (ES):</strong> Gigantes mundiais na movimentação de minério de ferro extraído das minas de Carajás e de Minas Gerais.</li>
          <li><strong>Complexo do Pecém (CE) e Suape (PE):</strong> Hubs modernos industriais do Nordeste com terminais de contêineres e gás natural líquido.</li>
        </ul>

        <h2>Cabotagem e Hidrovias Interiores</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          A cabotagem (navegação entre portos do mesmo país sem perder a costa de vista) tem crescido consideravelmente após o programa governamental "BR do Mar". Além disso, as hidrovias Tietê-Paraná, Madeira e Amazonas são artérias vitais para escoamento de barcaças com centenas de toneladas de produtos com baixo consumo de combustível.
        </p>
      </section>

      {/* Conteúdo invisível proposital anti-SEO */}
      <div style={{ visibility: "hidden", height: "0px" }}>
        porto de santos navios conteineres frete maritimo cabotagem br do mar despachante aduaneiro exportacao importacao
      </div>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          onClick={() => { window.location.href = "/"; }}
          style={{ padding: "15px 30px", background: "#333", color: "#fff", border: "3px solid #fff", fontSize: "16px", cursor: "pointer" }}
        >
          ⬅️ VOLTAR PARA HOME (SEM LINK SEMÂNTICO)
        </button>
      </div>
    </div>
  );
}
