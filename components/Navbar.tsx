"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true); 
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  if (!mounted) {
    return <div className="h-20 w-full bg-white/80" />; 
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white/80 backdrop-blur-md border-b border-slate-100`}
    >
      {/* Changed px-6 to px-12 to align with Hero Section */}
      <div className="mx-auto max-w-[1495px] px-12 h-20 flex items-center justify-between">
        
        {/* Left Side: Logo + Brand Name */}
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* Geometric P Logo */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-xl transition-transform group-hover:scale-105 shadow-lg shadow-blue-900/10">
            <span className="text-white font-black text-xl tracking-tighter">P</span>
            {/* Animated Status Dot */}
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase">
              PRANADIR<span className="text-blue-600">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
              AI Automation Architect
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" suppressHydrationWarning className="hover:text-blue-600 transition-colors">Problem</a>
          <a href="#systems" suppressHydrationWarning className="hover:text-blue-600 transition-colors">Systems</a>
          <a href="#methodology" suppressHydrationWarning className="hover:text-blue-600 transition-colors">Methodology</a>
          <a href="#platforms" suppressHydrationWarning className="hover:text-blue-600 transition-colors">Socials</a>
          <a href="#faq" suppressHydrationWarning className="hover:text-blue-600 transition-colors">FAQ</a>
          
          <a 
            href="#contact" 
            suppressHydrationWarning
            className="px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-sm"
          >
            Get an Audit
          </a>
        </div>
      </div>
    </nav>
  );
}