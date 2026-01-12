"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      } as any, // "as any" bypasses the strict TypeScript error on Vercel
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden py-20">
      <div className="absolute inset-0 z-0 bg-grid-slate animate-grid-drift opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full z-0" />

      <div className="container mx-auto px-12 relative" style={{ zIndex: 10 }}>
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full md:w-3/5 space-y-2 text-slate-900 md:pt-28">
            
            <div className="overflow-hidden pb-2">
              <motion.h1 
                variants={itemVariants} 
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9] text-blue-600"
              >
                Hi, I am Pranadir
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-2 pb-2">
              <motion.h1 
                variants={itemVariants} 
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]"
              >
                I help teams identify
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-2 pb-4">
              <motion.h1 
                variants={itemVariants} 
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]"
              >
                and build <span className="text-blue-600">practical AI</span> 
              </motion.h1>
            </div>

            <div className="overflow-hidden -mt-6 pb-4">
              <motion.h1 
                variants={itemVariants} 
                className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]"
              >
                automation systems.
              </motion.h1>
            </div>

            <div className="overflow-hidden pt-6">
              <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                From lead response and onboarding to RAG agents and voice workflows - I audit existing processes and build automations using n8n and modern AI stacks.
              </motion.p>
            </div>
            
            <motion.div variants={itemVariants} className="flex gap-4 pt-8">
              <a href="#contact" suppressHydrationWarning className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-200 transition-all">
                Book an Audit
              </a>
              <a href="#systems" suppressHydrationWarning className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all">
                View Systems
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-2/5 flex justify-center md:-mt-32"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3">
               <img src="/images/pranadir-headshot.png" alt="Pranadir" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}