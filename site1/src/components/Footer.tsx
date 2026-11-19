export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1a0033",
      color: "#ff66cc",
      padding: "40px 20px",
      marginTop: "100px",
      borderTop: "8px dotted #ff0055",
      textAlign: "center"
    }}>
      <h6 style={{ fontSize: "20px", color: "#ffff00" }}>
        © 1999-2026 Portal Brasileiro de Transportes Todos os Direitos e Erros Reservados
      </h6>

      <p style={{ fontSize: "14px", maxWidth: "800px", margin: "10px auto" }}>
        Este portal foi desenvolvido empregando deliberadamente as <strong>PIORES PRÁTICAS</strong> existentes:
        ausência de alt em imagens ou alt genérico, desrespeito de hierarquia de tags H1 a H6, tags noindex/nofollow,
        meta descriptions idênticas, bloqueio de thread no clique, imagens brutas gigantescas sem compressão nem lazy-loading,
        layout shifts caóticos e ausência de links semânticos rastreáveis por robôs de busca.
      </p>

      {/* Exemplo clássico de Black Hat SEO: Keyword Stuffing com cor do fundo ou invisível */}
      <div className="keyword-stuffing-hidden" aria-hidden="true">
        transporte brasil transporte aereo transporte terrestre transporte maritimo aviao boeing embraer gol azul latam
        caminhao scania volvo mercedes onibus marcopolo rodovias br101 br116 pedagio frete logistica porto de santos
        porto de paranagua cabotagem navio carga conteiner trem vale fepasa cptm metro correios entrega sedex rastreamento
        passagem aerea promocao passagem onibus viagem barata turismo brasil rio sao paulo salvador brasilia recife manaus
      </div>

      <div style={{ marginTop: "20px", fontSize: "12px", color: "#888888" }}>
        Melhor visualizado em resolução 800x600 no Netscape Navigator 4.0 ou Internet Explorer 5.5
      </div>
    </footer>
  );
}
