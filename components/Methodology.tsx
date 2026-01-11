import { Search, PenTool, Cpu, Rocket } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function Methodology() {
  const steps = [
    {
      icon: <Search size={24} />, // Removed hardcoded color here to let the container control it
      title: "01. Architecture Audit",
      desc: "I study your existing manual workflows to identify bottlenecks and map how data moves through your business."
    },
    {
      icon: <PenTool size={24} />,
      title: "02. Logic Mapping",
      desc: "Before building, I design the system logic to ensure AI adds real leverage where it matters most, not just for the sake of it."
    },
    {
      icon: <Cpu size={24} />,
      title: "03. Build & Orchestrate",
      desc: "I connect n8n, APIs, and LLMs into a single end-to-end system that runs reliably 24/7 without human intervention."
    },
    {
      icon: <Rocket size={24} />,
      title: "04. Stress Test & Deploy",
      desc: "Every system is tested for edge cases and deployed with monitoring to ensure long-term production stability."
    }
  ];

  return (
    <section id="methodology" className="w-full bg-white py-32 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading Area Wrapped */}
        <ScrollReveal width="100%">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
              The Framework
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              How I Approach Building <br className="hidden md:block"/> 
              <span className="text-blue-600">AI automation systems</span>
            </h3>
          </div>
        </ScrollReveal>

        {/* Technical Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} width="100%">
              <div 
                className="group relative p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full"
              >
                {/* Subtle Step Number Indicator */}
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-100/50 group-hover:text-blue-50 transition-colors pointer-events-none">
                  0{i + 1}
                </div>
                
                <div className="relative z-10">
                  {/* Updated: Container now handles the transition for both BG and Text color */}
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {/* The icon will now inherit 'white' when the group is hovered */}
                    {step.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                    {step.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Callout Wrapped */}
        <ScrollReveal width="100%">
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-slate-900 text-white overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-lg font-medium">Ready to see the blueprint for your business?</p>
            </div>
            <a 
              href="#contact" 
              className="mt-6 md:mt-0 relative z-10 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20"
            >
              Get a Custom Roadmap
            </a>
            {/* Decorative Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}