"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      companyName: formData.get("companyName"),
      businessType: formData.get("businessType"),
      automationGoal: formData.get("automationGoal"),
    };

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <ScrollReveal width="100%">
        <div className="mx-auto max-w-xl py-32 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600 mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Talk soon.</h2>
          <p className="mt-4 text-slate-600">Success. I’ll be reviewing your business goals now. Check your email for a link to book our session.</p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <section id="contact" className="w-full bg-slate-50 py-32">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal width="100%">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-slate-900 p-10 text-white">
              <h2 className="text-3xl font-bold leading-tight">Book a free Automation Audit.</h2>
              <p className="mt-6 text-slate-400 leading-relaxed">
                In 30 minutes, we'll map out your manual bottlenecks and I'll provide a high-level architecture for your AI system.
              </p>
              <ul className="mt-12 space-y-6">
                {["Zero-fluff technical call", "Custom systems roadmap", "Tool stack recommendations"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="text-blue-400" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-3 p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                  <input name="firstName" required suppressHydrationWarning placeholder="John" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                  <input name="lastName" required suppressHydrationWarning placeholder="Doe" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Work Email</label>
                <input type="email" name="email" required suppressHydrationWarning placeholder="john@company.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition font-medium" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Company Name</label>
                  <input name="companyName" required suppressHydrationWarning placeholder="Acme Corp" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Industry / Business Type</label>
                  <input name="businessType" required suppressHydrationWarning placeholder="e.g. SaaS, Fintech, Agency" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">What do you want to automate?</label>
                <textarea name="automationGoal" required suppressHydrationWarning rows={4} placeholder="Describe the workflow you want to put on autopilot..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
              </div>

              <button type="submit" suppressHydrationWarning className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Claim My Free Audit <Send size={18} />
              </button>
              <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">No commitment. Just engineering expertise.</p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}