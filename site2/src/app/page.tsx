import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Cabeçalho principal com semântica correta */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Panorama Geral do Transporte Brasileiro
        </h1>
        <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">
          O Brasil integra pessoas, cargas e mercados por meio de três grandes eixos: Céu, Terra e Água.
        </p>
      </div>

      {/* Hero Image otimizada com Next Image (WebP, dimensões explícitas, priority para LCP) */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[12/7] mb-12">
        <Image
          src="/images/hero_geral.webp"
          alt="Visão panorâmica dos modais de transporte no Brasil: aviação, rodovias e portos"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
          className="object-cover"
        />
      </div>

      {/* Grid com os três modais */}
      <section aria-label="Modais de Transporte" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card Aéreo */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="relative aspect-[4/3] w-full bg-slate-100">
            <Image
              src="/images/transporte_aereo.webp"
              alt="Aeronave comercial e infraestrutura aeroportuária brasileira"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Transporte Aéreo</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Vital para a integração continental do território nacional. Aeroportos como Guarulhos, Viracopos e Brasília concentram o fluxo de passageiros e cargas expressas de alto valor agregado.
              </p>
            </div>
            <Link
              href="/aereo"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-sky-700 hover:bg-sky-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Ver Detalhes do Aéreo ✈️
            </Link>
          </div>
        </article>

        {/* Card Terrestre */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="relative aspect-[4/3] w-full bg-slate-100">
            <Image
              src="/images/transporte_terrestre.webp"
              alt="Caminhão em rodovia brasileira representando o modal rodoviário e ferroviário"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Transporte Terrestre</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Mais de 65% de todas as cargas brasileiras transitam por rodovias como a BR-101 e BR-116. As ferrovias cumprem papel decisivo no escoamento de minérios e safras agrícolas aos portos.
              </p>
            </div>
            <Link
              href="/terrestre"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-amber-700 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Ver Detalhes do Terrestre 🚚
            </Link>
          </div>
        </article>

        {/* Card Marítimo */}
        <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="relative aspect-[4/3] w-full bg-slate-100">
            <Image
              src="/images/transporte_maritimo.webp"
              alt="Navio cargueiro atracado em porto marítimo brasileiro"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Transporte Marítimo</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Com mais de 7.400 km de costa litorânea, o transporte marítimo responde pela maior parte da balança comercial internacional brasileira, ancorado pelo Porto de Santos e terminais regionais.
              </p>
            </div>
            <Link
              href="/maritimo"
              className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Ver Detalhes do Marítimo 🚢
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
