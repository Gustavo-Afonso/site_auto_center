"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BeforeAfterFade = ({ beforeImageSrc, afterImageSrc, altText, width, height }) => {
  const [showBefore, setShowBefore] = useState(true);
  
  useEffect(() => {
    // Configura o timer para fazer o fade após 3 segundos
    const timer = setTimeout(() => {
      setShowBefore(false);
    }, 3000);
    
    // Limpa o timer quando o componente é desmontado
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Container com tamanho fixo para manter o layout estável */}
      <div 
        className="relative w-full" 
        style={{ 
          aspectRatio: `${width}/${height}`,
          maxWidth: '100%'
        }}
      >
        {/* Imagem "depois" (sempre visível, fica atrás) */}
        <div className="absolute inset-0">
          <Image
            src={afterImageSrc}
            alt={`${altText} - depois`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>
        
        {/* Imagem "antes" (com transição fade-out) */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            showBefore ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={beforeImageSrc}
            alt={`${altText} - antes`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterFade;