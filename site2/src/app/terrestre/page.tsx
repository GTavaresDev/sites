import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transporte Terrestre Brasileiro | Rodovias e Ferrovias",
  description: "Entenda a malha rodoviária e ferroviária brasileira, corredores logísticos como a BR-116 e o transporte de cargas e passageiros.",
};

export default function TerrestrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors">
          ← Voltar para o Panorama Geral
        </Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Transporte Terrestre no Brasil
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Rodovias, ferrovias e a espinha dorsal logística da matriz de transporte de cargas e passageiros.
        </p>
      </header>

      {/* Hero Image Terrestre com Next Image */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 aspect-[12/7] mb-8">
        <Image
          src="/images/transporte_terrestre.webp"
          alt="Rodovia com transporte de cargas pesadas no Brasil"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      <article className="prose prose-slate max-w-none bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">A Matriz Rodoviária</h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Com a expansão histórica dos planos de integração nacional a partir da década de 1950, o Brasil concentrou forte parcela de seus investimentos no modal rodoviário. Hoje, mais de 65% das cargas e a imensa maioria dos passageiros intermunicipais se deslocam através de rodovias.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Principais Corredores Rodoviários</h2>
        <ul className="space-y-3 text-slate-700 mb-6 list-disc list-inside">
          <li><strong>BR-116:</strong> A espinha dorsal do país, ligando o Ceará ao Rio Grande do Sul e conectando importantes polos metropolitanos como São Paulo e Rio de Janeiro.</li>
          <li><strong>BR-101:</strong> Rodovia litorânea de grande relevância turística, comercial e industrial, cortando mais de uma dezena de estados.</li>
          <li><strong>BR-163 e BR-364:</strong> Rotas de escoamento agrícola do Centro-Oeste brasileiro até estações de transbordo e portos fluviais do Arco Norte.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">O Papel Estratégico das Ferrovias</h2>
        <p className="text-slate-700 leading-relaxed">
          Embora representem fatia menor do total, ferrovias como a Estrada de Ferro Carajás e a Ferrovia Norte-Sul são recordistas em eficiência energética e sustentabilidade no transporte em massa de minérios, grãos e fertilizantes.
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
