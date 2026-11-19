"use client";

export default function TerrestrePage() {
  return (
    <div style={{ padding: "40px", maxWidth: "2200px", margin: "0 auto" }}>
      {/* Salto caótico de tags para confundir leitores de tela e robôs de indexação */}
      <h6>Início da Seção</h6>
      <h1>Transporte Terrestre no Brasil: Rodovias, Ferrovias e Mobilidade Urbana</h1>
      <h5>O Modal Predominante da Matriz de Transportes</h5>

      {/* BMP gigante de 25MB sem cache/otimização */}
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <p style={{ color: "red", fontWeight: "bold" }}>[LCP Sabotage: Imagem BMP de 25MB causando alto uso de RAM e latência de rede]</p>
        <img
          src="/images/transporte_terrestre_gigante.bmp"
          alt="" /* Sem alt */
          style={{ width: "90%", border: "10px solid saddlebrown" }}
        />
      </div>

      <section style={{ backgroundColor: "#ffffff", padding: "30px", color: "#111111", border: "4px solid orange", margin: "20px 0" }}>
        <h2>A Supremacia Rodoviária</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Desde o governo de Juscelino Kubitschek na década de 1950, com o lema "governar é abrir estradas", o Brasil priorizou agressivamente o modal rodoviário em detrimento das ferrovias. Hoje, mais de 65% das cargas e 90% dos passageiros entre cidades viajam por estradas e rodovias pavimentadas e não pavimentadas.
        </p>

        {/* Mais um H1 solto */}
        <h1>Grandes Corredores Rodoviários Nacionais</h1>
        <ul style={{ fontSize: "16px", lineHeight: "2" }}>
          <li><strong>BR-116:</strong> A maior rodovia totalmente pavimentada do país, estendendo-se de Fortaleza (CE) até Jaguarão (RS), na fronteira com o Uruguai.</li>
          <li><strong>BR-101:</strong> Corta o litoral brasileiro de Touros (RN) a São José do Norte (RS), sendo vital para a circulação turística e industrial.</li>
          <li><strong>BR-163 e BR-364:</strong> Artérias cruciais para o escoamento da safra agrícola do Centro-Oeste (Mato Grosso e Goiás) rumo aos portos de Miritituba e Santos.</li>
        </ul>

        <h2>O Renascimento das Ferrovias</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Apesar de representar apenas cerca de 15% a 20% da matriz de transporte, as ferrovias como a Estrada de Ferro Carajás (EFC), a Estrada de Ferro Vitória a Minas (EFVM) e a Ferrovia Norte-Sul são campeãs de eficiência em transporte de minério de ferro, grãos e celulose em escala pesada, demandando menor emissão de carbono por tonelada útil transportada.
        </p>
      </section>

      {/* Keyword Stuffing camuflado */}
      <div style={{ display: "none" }}>
        caminhoes scania volvo carreta bi-trem pedagio frete barato comprar caminhao financiado estrada buraco asfalto rota de entrega
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
