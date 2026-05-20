/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  video: string;
  poster: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ service }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0, rootMargin: '400px 0px' }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative bg-zinc-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 border border-zinc-800 hover:border-orange-500/30 h-[360px]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
        src={service.video}
        poster={service.poster}
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-5 bg-orange-500 rounded-full flex-shrink-0" />
          <h3 className="text-lg font-bold text-white">{service.title}</h3>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 text-sm font-semibold mt-3 transition-colors group/link"
        >
          Solicitar Orçamento
          <svg className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Funilaria',
      description: 'Reparos estruturais com precisão para devolver a integridade do seu veículo.',
      video: '/videos/lanternagem.mp4',
      poster: '/videos/posters/lanternagem.jpg',
    },
    {
      title: 'Pintura',
      description: 'Pintura de alta qualidade com acabamento perfeito e cores originais.',
      video: '/videos/pintura.mp4',
      poster: '/videos/posters/pintura.jpg',
    },
    {
      title: 'Polimento Técnico',
      description: 'Recuperação do brilho e proteção da pintura do seu veículo.',
      video: '/videos/polimento.mp4',
      poster: '/videos/posters/polimento.jpg',
    },
    {
      title: 'Higienização',
      description: 'Limpeza profunda que elimina germes e odores, deixando seu carro como novo.',
      video: '/videos/higienizacao.mp4',
      poster: '/videos/posters/higienizacao.jpg',
    },
    {
      title: 'Personalização',
      description: 'Customização do seu veículo de acordo com seu estilo e preferências.',
      video: '/videos/gol-reformado.mp4',
      poster: '/videos/posters/gol-reformado.jpg',
    },
    {
      title: 'Restauração de Veículos Antigos',
      description: 'Devolvemos a vida e o charme original aos clássicos com cuidado e expertise.',
      video: '/videos/fusca-reformado.mp4',
      poster: '/videos/posters/fusca-reformado.jpg',
    },
  ];

  return (
    <section id="services" className="py-16 bg-zinc-950 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="w-full max-w-md space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <span className="bg-orange-500 text-transparent bg-clip-text">Nossos Serviços</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto" />
          </div>
          <div className="max-w-[900px] text-center text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
            Qualidade e precisão em cada serviço que realizamos para o seu veículo.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
