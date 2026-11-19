import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transporte Marítimo Brasileiro | Portos e Cabotagem",
  description: "Descubra a relevância dos portos marítimos, da cabotagem e das hidrovias para a balança comercial e o transporte no Brasil.",
};

export default function MaritimoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors">
          ← Voltar para o Panorama Geral
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Transporte Marítimo e Hidroviário no Brasil
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Portos exportadores, cabotagem costeira e transporte fluvial interior.
        </p>
      </header>

      {/* Hero Image Marítimo com Next Image */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[12/7] mb-8">
        <Image
          src="/images/transporte_maritimo.webp"
          alt="Operação portuária com navios e contêineres no Brasil"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <article className="prose prose-slate max-w-none bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">A Costa Brasileira e o Comércio Exterior</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Com mais de 7.400 quilômetros de costa marítima, o Brasil realiza mais de 95% de seu comércio internacional por vias marítimas. Navios porta-contêineres, graneleiros e petroleiros conectam a produção brasileira aos maiores mercados globais.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Portos Estruturantes da Economia</h2>
        <ul className="space-y-3 text-slate-700 mb-6 list-disc list-inside">
          <li><strong>Porto de Santos (SP):</strong> O maior complexo portuário da América Latina, movimentando quase 30% de todo o intercâmbio comercial do país.</li>
          <li><strong>Porto de Paranaguá (PR):</strong> Polo de excelência na exportação de grãos, farelo de soja e cargas refrigeradas.</li>
          <li><strong>Porto de Itaqui (MA) e Tubarão (ES):</strong> Referências globais na movimentação pesada de minério de ferro.</li>
          <li><strong>Portos do Arco Norte (Barcarena, Santarém):</strong> Terminais hidroviários fluviais modernos com rápido crescimento de capacidade.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Cabotagem e Hidrovias Interiores</h2>
        <p className="text-slate-700 leading-relaxed">
          O modal hidroviário e a cabotagem oferecem alternativas logísticas limpas e de alto volume, aliviando o tráfego rodoviário e diminuindo custos com queima de combustíveis fósseis.
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
