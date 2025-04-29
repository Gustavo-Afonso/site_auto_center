import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button'; // Adjust path to your Button component

interface Service {
  title: string;
  description: string;
  video: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ service }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
      style={{ willChange: 'transform' }}
    >
      {isVisible && (
        <>
          <div className="relative h-[300px]">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={service.video}
              width={400}
              height={300}
              muted
              loop
              playsInline
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
            <Button variant="link" className="mt-4 p-0" asChild>
              <Link href="#contact">Solicitar Orçamento</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
});

// Add displayName to fix the ESLint error
ServiceCard.displayName = 'ServiceCard';

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Funilaria',
      description: 'Reparos estruturais com precisão para devolver a integridade do seu veículo.',
      video: '/videos/lanternagem.mp4',
      
    },
    {
      title: 'Pintura',
      description: 'Pintura de alta qualidade com acabamento perfeito e cores originais.',
      video: '/videos/pintura.mp4',
      
    },
    {
      title: 'Polimento Técnico',
      description: 'Recuperação do brilho e proteção da pintura do seu veículo.',
      video: '/videos/polimento.mp4',
      
    },
    {
      title: 'Higienização',
      description: 'Limpeza profunda que elimina germes e odores, deixando seu carro como novo.',
      video: '/videos/higienizacao.mp4',
      
    },
    {
      title: 'Personalização',
      description: 'Customização do seu veículo de acordo com seu estilo e preferências.',
      video: '/videos/gol-reformado.mp4',
      
    },
    {
      title: 'Restauração de Veículos Antigos',
      description: 'Devolvemos a vida e o charme original aos clássicos com cuidado e expertise.',
      video: '/videos/fusca-reformado.mp4',
      
    },
  ];

  return (
    <section id="services" className="py-16 bg-muted/50 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="w-full max-w-md space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="bg-orange-500 text-transparent bg-clip-text">Nossos Serviços</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto" />
          </div>
          <div className="max-w-[900px] text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
            Veja a transformação que realizamos em cada veículo que passa por nossas mãos.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;