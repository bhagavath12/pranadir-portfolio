import { Youtube, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function PlatformLinks() {
  const platforms = [
    { name: "YouTube", icon: <Youtube className="text-red-600" size={32} />, title: "Technical Build Logs", desc: "Deep-dives into the architecture behind my AI agents. I document every line of logic and integration.", link: "https://www.youtube.com/@Pranadir-Ai-04", cta: "Watch Builds" },
    { name: "LinkedIn", icon: <Linkedin className="text-blue-700" size={32} />, title: "Operations Strategy", desc: "Daily insights on systems thinking, AI infrastructure, and scaling manual workflows for founders.", link: "https://www.linkedin.com/in/pranadir-bhagavath-sena-reddy-bakaram-253572251/", cta: "Follow Updates" },
    { name: "GitHub", icon: <Github className="text-slate-900" size={32} />, title: "System Source Code", desc: "I open-source parts of my logic frameworks and n8n templates to prove system reliability.", link: "https://github.com/bhagavath12", cta: "View Repos" }
  ];

  return (
    <section id="platforms" className="w-full bg-white py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal width="100%">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Verification</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tight">Want to see how I think and build?</h3>
            <p className="mt-4 text-xl text-slate-600">I share my research, logic, and raw code across these platforms.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((p, i) => (
            <ScrollReveal key={i} width="100%">
              <a href={p.link} target="_blank" rel="noopener noreferrer" suppressHydrationWarning className="group relative p-10 rounded-3xl border border-slate-200 bg-white hover:border-blue-500 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-8 flex justify-between items-center">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                      {p.icon}
                    </div>
                    <ArrowUpRight className="text-slate-300 group-hover:text-blue-500 transition-colors" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{p.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-10">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600 group-hover:gap-4 transition-all">
                  {p.cta} <span>→</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}