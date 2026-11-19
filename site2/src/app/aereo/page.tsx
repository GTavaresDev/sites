import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transporte Aéreo Brasileiro | Infraestrutura e Malha Aérea",
  description: "Conheça os principais aeroportos, hubs de carga e passageiros e a relevância da aviação comercial e regional no Brasil.",
};

export default function AereoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-sm font-medium text-sky-700 hover:text-sky-800 transition-colors">
          ← Voltar para o Panorama Geral
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Transporte Aéreo Brasileiro
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Aviação comercial, aviação regional e o transporte de cargas de alto valor agregado.
        </p>
      </header>

      {/* Hero Image Aéreo com Next Image */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[12/7] mb-8">
        <Image
          src="/images/transporte_aereo.webp"
          alt="Aeronave comercial e pista de aeroporto no Brasil"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <article className="prose prose-slate max-w-none bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">A Importância Estratégica do Modal Aéreo</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Devido às dimensões continentais do território brasileiro (mais de 8,5 milhões de km²), o transporte aéreo é a espinha dorsal para viagens de longa distância que seriam impraticáveis ou excessivamente lentas por rodovias. A rota da Ponte Aérea Rio-São Paulo (Santos Dumont - Congonhas) é historicamente uma das mais movimentadas do planeta.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Hubs Principais e Aeroportos Estratégicos</h2>
        <ul className="space-y-3 text-slate-700 mb-6 list-disc list-inside">
          <li><strong>Aeroporto Internacional de Guarulhos (GRU):</strong> Principal porta de entrada de passageiros e cargas internacionais da América do Sul.</li>
          <li><strong>Aeroporto de Viracopos (VCP):</strong> O maior centro logístico de importação e exportação de cargas aéreas farmacêuticas e de alta tecnologia.</li>
          <li><strong>Aeroporto de Brasília (BSB):</strong> Ponto nevrálgico de conexões domésticas unindo todas as cinco regiões do país.</li>
          <li><strong>Integração da Amazônia Legal:</strong> Fundamental para conectar comunidades ribeirinhas e capitais como Manaus e Boa Vista.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Desafios do Setor</h2>
        <p className="text-slate-700 leading-relaxed">
          Entre os principais entraves estão a volatilidade do custo do combustível de aviação (QAV), a modernização da infraestrutura em aeroportos do interior e a necessidade constante de expansão da capacidade terminal.
        </p>
      </article>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
