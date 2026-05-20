/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

interface BeforeAfterImage {
  before: string;
  after: string;
}

interface BeforeAfterSimpleRowProps {
  images: BeforeAfterImage[];
}

export function BeforeAfterSimpleRow({ images }: BeforeAfterSimpleRowProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full py-8">
      <div className="space-y-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-stretch gap-3 max-w-4xl mx-auto"
          >
            {/* Antes */}
            <div
              className="relative w-full h-72 sm:h-80 md:h-72 lg:h-80 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.before)}
            >
              <img
                src={image.before}
                alt={`Antes ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full pointer-events-none">
                Antes
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Separador */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0 px-1">
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-orange-400" />
                <div className="bg-orange-500 text-white rounded-full p-1.5 shadow-md shadow-orange-500/40">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="w-6 h-0.5 bg-orange-400" />
              </div>
            </div>

            {/* Mobile separador */}
            <div className="flex md:hidden items-center justify-center gap-2 py-1">
              <div className="flex-1 h-0.5 bg-orange-200" />
              <div className="bg-orange-500 text-white rounded-full p-1 shadow">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
              <div className="flex-1 h-0.5 bg-orange-200" />
            </div>

            {/* Depois */}
            <div
              className="relative w-full h-72 sm:h-80 md:h-72 lg:h-80 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.after)}
            >
              <img
                src={image.after}
                alt={`Depois ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              <span className="absolute top-3 left-3 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full pointer-events-none">
                Depois
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-xl hover:bg-gray-100 transition-colors text-sm"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
