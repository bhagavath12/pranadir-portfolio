export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="text-2xl font-black tracking-tighter">
            PRANADIR<span className="text-blue-500">.</span>
          </div>
          <p className="text-slate-400 text-sm max-w-xs uppercase tracking-widest font-medium">
            Architecting the future of autonomous business operations.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-300">
          <a href="#systems" className="hover:text-blue-400 transition-colors">Systems</a>
          <a href="#methodology" className="hover:text-blue-400 transition-colors">Process</a>
          <a href="https://youtube.com/@Pranadir-Ai-04" target="_blank" className="hover:text-blue-400 transition-colors">Lab</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Book Audit</a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Est. 2026 / Build 0.1</p>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">© PRANADIR — NO RIGHTS RESERVED. JUST BUILD.</p>
        </div>
      </div>
    </footer>
  );
}