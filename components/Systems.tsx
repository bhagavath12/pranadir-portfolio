import { systems } from "@/lib/systems";
import { ScrollReveal } from "./ScrollReveal";

export default function Systems() {
  return (
    <section id="systems" className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header Wrapped in Scroll Animation */}
        <ScrollReveal width="100%">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight underline decoration-blue-500 decoration-4 underline-offset-8">
                Automation Systems I’ve Built
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Systems List */}
        <div className="space-y-40">
          {systems.map((system, index) => (
            /* Wrap each system row in Scroll Animation */
            <ScrollReveal key={system.name} width="100%">
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Info Column - 50% width */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                    System 0{index + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight uppercase italic">
                    {system.name}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {system.intent}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {system.techSpecs.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 text-[9px] font-bold uppercase rounded border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Impact</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {system.replaces.map((item) => (
                        <li key={item} className="text-sm text-slate-700 flex items-center gap-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Media Column - 50% width with updated RAG Agent video link */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
                    {/* Logic: If the system name contains "RAG", use your new video embed link. 
                        Otherwise, fall back to the library URL or the placeholder.
                    */}
                    {(system.name.toLowerCase().includes("rag") || system.videoUrl) ? (
                      <iframe
                        src={system.name.toLowerCase().includes("rag") 
                             ? "https://www.youtube.com/embed/s7g7tChNNzw" 
                             : system.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        suppressHydrationWarning
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center p-8">
                         <img src="/images/workflow-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" alt="Blueprint" />
                         <p className="relative z-10 text-white font-mono text-[10px] uppercase tracking-widest bg-black/40 px-4 py-2 rounded">Mapping Infrastructure...</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}