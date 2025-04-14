/* eslint-disable @next/next/no-img-element */
// components/BeforeAfterSimpleRow.tsx
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

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full py-8">
      <div className="space-y-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto"
          >
            {/* Imagem "Antes" */}
            <div className="w-full h-80 sm:h-64 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={image.before}
                alt={`Antes ${index + 1}`}
                className="w-full h-full object-cover"
                onClick={() => openModal(image.before)}
              />
              <div className="text-center text-sm font-bold mt-1 text-gray-600">
                Antes
              </div>
            </div>

            {/* Imagem "Depois" */}
            <div className="w-full h-80 sm:h-64 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={image.after}
                alt={`Depois ${index + 1}`}
                className="w-full h-full object-cover"
                onClick={() => openModal(image.after)}
              />
              <div className="text-center text-sm font-bold mt-1 text-gray-600">
                Depois
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para exibir a imagem em tela cheia */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-md">
            <img
              src={selectedImage}
              alt="Imagem em tela cheia"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}