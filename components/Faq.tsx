"use client";
import { useState } from "react";
import { faqs } from "@/lib/faqData";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-slate-50 py-24 border-t border-slate-100 scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal width="100%">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Expertise & Safety FAQ</h2>
        </ScrollReveal>

        <ScrollReveal width="100%">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  suppressHydrationWarning
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {faq.question}
                  {openIndex === i ? <Minus size={20}/> : <Plus size={20}/>}
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 leading-relaxed border-l-2 border-blue-500 pl-4 italic">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}