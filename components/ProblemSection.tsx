import { TrendingUp, Repeat, Database, Plug, AlertCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function ProblemSection() {
  const problems = [
    {
      icon: <TrendingUp size={22} />,
      title: "Lead Decay & Friction",
      desc: "Leads go cold within minutes. If your response isn't instant, you're losing 70% of your conversion potential.",
      cost: "Lost Revenue"
    },
    {
      icon: <Repeat size={22} />,
      title: "The 'Manual Work' Tax",
      desc: "High-value team members spending 10+ hours a week on data entry and repetitive admin tasks.",
      cost: "Burned Talent"
    },
    {
      icon: <Database size={22} />,
      title: "Disconnected Data Silos",
      desc: "Valuable customer data is trapped in Slack, Email, and CRMs. Nothing talks to each other in real-time.",
      cost: "Zero Visibility"
    },
    {
      icon: <Plug size={22} />,
      title: "Fragmented AI Stack",
      desc: "Having ChatGPT isn't a strategy. Without a central orchestration system, your tools are just toys.",
      cost: "Inefficient Ops"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-32 border-t border-slate-100 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 relative" style={{ zIndex: 10 }}>
        
        {/* Animated Header */}
        <ScrollReveal width="100%">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Most teams don’t have an AI problem - <span className="text-blue-600">they have a systems problem.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-600">
              Adding more tools won't fix a broken workflow. You need a unified engine that runs 24/7 without human intervention.
            </p>
          </div>
        </ScrollReveal>

        {/* Animated Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((p, i) => (
            <ScrollReveal key={i} width="100%">
              {/* Added hover:-translate-y-2 and custom blue shadow glow */}
              <div className="group p-8 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-blue-300 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] hover:-translate-y-2 h-full">
                
                {/* Updated: Container turns blue and icon turns white on hover */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-slate-100 font-bold">
                  {p.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{p.desc}</p>
                
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
                  <AlertCircle size={14} />
                  The Hidden Cost: {p.cost}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Animated Footer Box */}
        <ScrollReveal width="100%">
          <div className="mt-24 p-10 bg-slate-900 rounded-3xl text-center text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none grid-bg invert" />
            <p className="text-blue-400 font-mono text-sm tracking-[0.2em] uppercase mb-4 font-bold">The Solution</p>
            <h3 className="text-3xl font-bold mb-6 italic">Stop managing tasks. Start building systems.</h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              I design and deploy the glue between your tools, turning manual chaos into a reliable growth engine.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}