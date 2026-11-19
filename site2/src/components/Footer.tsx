export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-semibold text-slate-300">
          © {new Date().getFullYear()} Portal Brasileiro de Transportes
        </p>
        <p className="mt-2 text-xs text-slate-500 max-w-xl mx-auto">
          Informações educacionais e técnicas sobre a malha de transportes e logística do Brasil.
        </p>
      </div>
    </footer>
  );
}
