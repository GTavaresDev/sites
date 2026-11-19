import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
            Portal dos Transportes Brasil
          </Link>
          <p className="text-xs text-slate-400 mt-1">
            Infraestrutura e Logística Nacional: Aéreo, Terrestre e Marítimo
          </p>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center" aria-label="Navegação principal">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Início
          </Link>
          <Link
            href="/aereo"
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-sky-700 hover:bg-sky-600 text-white transition-colors"
          >
            Aéreo ✈️
          </Link>
          <Link
            href="/terrestre"
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-amber-700 hover:bg-amber-600 text-white transition-colors"
          >
            Terrestre 🚚
          </Link>
          <Link
            href="/maritimo"
            className="px-3 py-1.5 rounded-md text-sm font-medium bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
          >
            Marítimo 🚢
          </Link>
        </nav>
      </div>
    </header>
  );
}
