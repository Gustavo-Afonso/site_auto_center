"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

// Interface para o componente de animação
interface FadeInWhenVisibleProps {
    children: ReactNode;
    delay?: number;
  }
  
  // Componente de animação de surgimento com tipagem correta
  const FadeInWhenVisible = ({ children, delay = 0 }: FadeInWhenVisibleProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: delay }}
      >
        {children}
      </motion.div>
    );
  };

export default FadeInWhenVisible;