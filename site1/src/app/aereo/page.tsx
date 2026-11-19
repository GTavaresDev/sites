"use client";

export default function AereoPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "2200px", margin: "0 auto" }}>
      {/* Quebra de hierarquia: começa direto em H4 depois pula para H1 e volta para H6 */}
      <h4>Subtítulo Solto Sem Contexto</h4>
      <h1>Transporte Aéreo Brasileiro: Aviação Comercial, Regional e Cargas</h1>
      <h6>Uma análise detalhada da malha aeroviária nacional</h6>

      {/* Imagem LCP pesadíssima BMP */}
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <p style={{ color: "red", fontWeight: "bold" }}>[LCP Destroyer: Imagem BMP de 25MB sem cache nem dimensão declarada]</p>
        <img
          src="/images/transporte_aereo_gigante.bmp"
          alt="" /* Sem alt para destruir a acessibilidade e SEO */
          style={{ width: "90%", border: "10px solid skyblue" }}
        />
      </div>

      <section style={{ backgroundColor: "#ffffff", padding: "30px", color: "#111111", border: "4px solid blue", margin: "20px 0" }}>
        <h2>A Importância Estratégica do Modal Aéreo no Brasil</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Devido às dimensões continentais do território brasileiro (mais de 8,5 milhões de km²), o transporte aéreo é a espinha dorsal para viagens de longa distância que seriam impraticáveis ou excessivamente lentas por rodovias. A rota entre a Ponte Aérea Rio-São Paulo (Santos Dumont - Congonhas) é historicamente uma das mais movimentadas do planeta.
        </p>

        {/* Mais um H1 no meio do conteúdo */}
        <h1>Hubs Principais e Aeroportos Estratégicos</h1>
        <ul style={{ fontSize: "16px", lineHeight: "2" }}>
          <li><strong>Aeroporto Internacional de Guarulhos (GRU):</strong> Principal porta de entrada de cargas internacionais e passageiros do Hemisfério Sul.</li>
          <li><strong>Aeroporto de Viracopos (Campinas - VCP):</strong> O maior centro logístico de importação e exportação de cargas aéreas de alta tecnologia e farmacêuticas.</li>
          <li><strong>Aeroporto de Brasília (BSB):</strong> Ponto nevrálgico de conexão (hub) interligando as regiões Norte, Nordeste, Centro-Oeste e Sul.</li>
          <li><strong>Integração da Amazônia Legal:</strong> Em cidades como Manaus, Boa Vista e comunidades ribeirinhas remotas, o transporte aéreo é muitas vezes a única via rápida para atendimento médico emergencial e envio de suprimentos.</li>
        </ul>

        <h2>Desafios Críticos</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Entre os principais entraves estão o alto custo do combustível de aviação (QAV - Querosene de Aviação), a infraestrutura deficiente em aeroportos regionais e as altas taxas de litígios jurídicos e cancelamentos decorrentes de condições meteorológicas severas.
        </p>
      </section>

      {/* Simulação de texto escondido com cor de fundo (Penalidade do Google) */}
      <div style={{ backgroundColor: "#ffff00", color: "#ffff00", fontSize: "10px" }}>
        passagens aereas baratas comprar passagem azul latam gol voos promocionais milhas smiles tudoazul latampass voos baratos brasil
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
