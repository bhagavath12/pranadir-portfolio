"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, width = "fit-content" }: Props) => {
  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        initial={{ y: 40, opacity: 0 }} // Reduced distance from 75 to 40 for less "work"
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }} 
        transition={{ 
          duration: 0.5, 
          ease: "easeOut" // Simpler easing is easier to calculate
        }}
        style={{ willChange: "transform, opacity" }} // Force GPU acceleration
      >
        {children}
      </motion.div>
    </div>
  );
};