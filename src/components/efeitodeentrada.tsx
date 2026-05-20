// components/TypingLoopAnimation.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypingLoopAnimationProps {
  texts: string[];                // Array de textos para alternar
  typingSpeed?: number;          // Velocidade de digitação (ms)
  deletingSpeed?: number;        // Velocidade de apagar (ms)
  delayAfterType?: number;       // Tempo de espera após digitação completa (ms)
  delayAfterDelete?: number;     // Tempo de espera após apagar completamente (ms)
  className?: string;            // Classes CSS
  cursorClassName?: string;      // Classes CSS para o cursor
  loop?: boolean;                // Repetir indefinidamente
}

const TypingLoopAnimation: React.FC<TypingLoopAnimationProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterType = 2000,
  delayAfterDelete = 500,
  className = '',
  cursorClassName = 'animate-blink',
  loop = true
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Limpa timeouts anteriores
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Se não houver textos, não faz nada
    if (!texts.length) return;
    
    const currentFullText = texts[textIndex];
    
    // Se estiver esperando, não faz nada
    if (isWaiting) return;
    
    if (isDeleting) {
      // Modo de apagar
      if (currentText === '') {
        // Texto completamente apagado
        setIsDeleting(false);
        setIsWaiting(true);
        
        // Avança para o próximo texto após um atraso
        timeoutRef.current = setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsWaiting(false);
        }, delayAfterDelete);
      } else {
        // Continua apagando
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      // Modo de digitação
      if (currentText === currentFullText) {
        // Texto completamente digitado
        setIsWaiting(true);
        
        // Começa a apagar após um atraso
        timeoutRef.current = setTimeout(() => {
          if (loop || textIndex < texts.length - 1) {
            setIsDeleting(true);
          }
          setIsWaiting(false);
        }, delayAfterType);
      } else {
        // Continua digitando
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    currentText, 
    isDeleting, 
    textIndex, 
    isWaiting, 
    texts, 
    typingSpeed, 
    deletingSpeed, 
    delayAfterType, 
    delayAfterDelete,
    loop
  ]);
  
  return (
    <span className={className}>
      <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{currentText}</span>
      <span className={cursorClassName}>|</span>
    </span>
  );
};

export default TypingLoopAnimation;