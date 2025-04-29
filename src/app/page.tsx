"use client"

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { BeforeAfterSimpleRow } from "@/components/antes_depois";
import { useRef, useState } from "react";
import ServicesSection from "@/components/sectiom";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const images = [
    {
      before: '/imagem-antes-depois/HB20-antes.jpg',
      after: '/imagem-antes-depois/HB20-depois.jpg',
    },
    {
      before: '/imagem-antes-depois/kia-antes.jpg',
      after: '/imagem-antes-depois/kia-depois.jpg',
    },
    {
      before: '/imagem-antes-depois/onix-antes.jpg',
      after: '/imagem-antes-depois/onix-depois.jpg',
    },
    { 
      before: '/imagem-antes-depois/sandeiro-antes.jpg',
      after: '/imagem-antes-depois/sandeiro-depois.jpg',
    }, 
    {
      before: '/imagem-antes-depois/savero-antes.jpg',
      after: '/imagem-antes-depois/saveiro-depois.jpg',
    },
    {
      before: '/imagem-antes-depois/porta-antes.jpg',
      after: '/imagem-antes-depois/porta-depois.jpg',
    },
    {
      before: '/imagem-antes-depois/uno-antes.jpg',
      after: '/imagem-antes-depois/uno-depois.jpg',
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "#services", label: "Serviços" },
    { href: "#gallery", label: "Antes e Depois" },
    { href: "#about", label: "Sobre Nós" },
    { href: "#contact", label: "Contato" }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
        <div className="container flex h-16 sm:h-20 items-center justify-between py-2 px-4 lg:px-8 mx-auto">
          <div className="flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:brightness-110">
            <img src="/logo/AUTOCENTER.png" alt="WF Auto Center Logo" className="h-25 sm:h-40 rounded-md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                className="text-sm font-medium relative group px-1 py-2"
                key={link.href}
              >
                <span className="text-gray-800 hover:text-orange-600 transition-colors duration-200">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-5 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <a
                href="https://wa.me/5521964656773?text=Quero%20fazer%20um%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <div className="bg-white rounded-full p-1.5 shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-orange-600 group-hover:animate-pulse"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="font-bold text-white text-sm whitespace-nowrap">
                  Agendar Agora
                </span>
              </a>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Abrir menu</span>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-800"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-800"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 hover:text-orange-600 px-3 py-3 text-base font-medium border-b border-gray-200 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-2 pb-1">
                <a
                  href="https://wa.me/5521964656773?text=Quero%20fazer%20um%20orçamento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Agendar Agora
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 items-center text-center lg:text-left lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 mx-auto lg:mx-0 max-w-[600px] w-full">
                <div className="space-y-3">
                  <h1 className="text-3xl text-orange-600 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none italic">
                    <span className="block">AUTO <span className="text-black">CENTER</span></span>
                    <span className="block text-black">WF LANTERNAGEM <span className="text-orange-600">.</span></span>
                  </h1>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-xl">
                    Funilaria, pintura e restauração com qualidade e compromisso. Seu carro merece o melhor tratamento.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="w-full sm:w-auto text-sm sm:text-base shadow-sm">
                    <Link href="#services">
                      Nossos Serviços
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                  <Button className="bg-orange-600 w-full sm:w-auto text-sm sm:text-base shadow-sm" asChild variant="outline" size="lg">
                    <Link href="#contact">Agende uma Visita</Link>
                  </Button>
                </div>
              </div>
              
              {/* Video Player */}
              <div className="mb-6 lg:mb-0 order-1 lg:order-2 flex justify-center mx-auto w-full">
                <div className="w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[300px] xl:max-w-[380px] relative">
                  <video 
                    ref={videoRef}
                    className="overflow-hidden rounded-xl object-cover w-full h-auto shadow-lg" 
                    playsInline 
                    controls={isPlaying}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/videos/videohero.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                  
                  {!isPlaying && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={handlePlayClick}
                    >
                      <div className="bg-white bg-opacity-70 rounded-full p-3 transform transition-transform hover:scale-110">
                        <div className="bg-orange-600 hover:bg-orange-700 rounded-full p-5 flex items-center justify-center shadow-lg">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-10 w-10 text-white" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <span className="absolute -bottom-8 left-0 right-0 text-center">
                        <span className="font-bold text-base text-orange-600 bg-white px-4 py-2 rounded-full shadow-md animate-pulse">
                          Clique para assistir!
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection/>

        {/* Gallery Section */}
        <section id="gallery" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="w-full max-w-md space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
                  <span className="bg-orange-500 text-transparent bg-clip-text">
                    Antes e Depois
                  </span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto"></div>
              </div>

              <div className="max-w-[900px] text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
                Veja a transformação que realizamos em cada veículo que passa por nossas mãos.
              </div>
            </div>
            
            <div className="mx-auto max-w-full md:max-w-5xl py-8 md:py-12 px-4 sm:px-0">
              <BeforeAfterSimpleRow images={images} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl text-orange-600 font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre a WF Auto Center</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                <div className="mt-4 space-y-4">
                  <p className="text-muted-foreground md:text-lg">
                    A WF Auto Center nasceu da paixão por automóveis e do compromisso com a excelência. Há anos no
                    mercado, nos especializamos em transformar veículos danificados em obras-primas e em personalizar
                    carros de acordo com o desejo de nossos clientes.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    Nossa equipe é formada por profissionais experientes e apaixonados, que trabalham com as melhores
                    técnicas e materiais do mercado para garantir resultados excepcionais.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    Nosso diferencial está na atenção aos detalhes, no compromisso com prazos e na transparência em todo
                    o processo. Cada veículo é tratado com o mesmo cuidado que teríamos com o nosso próprio.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold">Nossos Valores</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Qualidade em cada detalhe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Transparência com o cliente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Compromisso com prazos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Inovação constante</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <Image
                  src="/logo/icone.jpg"
                  width={600}
                  height={600}
                  alt="Equipe WF Auto Center"
                  className="rounded-xl object-cover w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
                <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto"></div>
                <p className="max-w-[900px] mx-auto mb-10 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos prontos para atender você e transformar seu veículo.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://wa.me/5521964656773?text=Quero%20fazer%20um%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-orange-600 hover:bg-orange-700 text-white font-bold py-6 px-6 sm:px-10 md:px-30 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span className="relative z-10 text-lg">Fazer Orçamento</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:animate-shine"></div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container items-center mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center">
                <div className="flex justify-center mb-4">
                  <div className="relative h-50 w-50 sm:h-50 sm:w-50">
                    <Image
                      src="/logo/icone.jpg"
                      alt="WF Auto Center Logo"
                      width={500}
                      height={500}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </Link>
              <p className="text-slate-300 mb-4">
                Excelência em funilaria, pintura e restauração de veículos em Duque de Caxias.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://wa.me/5521964656773?text=Quero%20fazer%20um%20orçamento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="sr-only">WhatsApp</span>
                </Link>
                <Link
                  href="https://www.instagram.com/wfautocenter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.facebook.com/WFautocenterLanternagem?mibextid=wwXIfr&rdid=HeJaNNzs7LzFS9Ft&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BGEvYXEG9%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link> 
              </div>
            </div>

            <div className="mt-8 sm:mt-0">
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8 lg:mt-0">
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Funilaria
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Pintura
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Polimento Técnico
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Higienização
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Personalização
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate-300 hover:text-white transition-colors">
                    Restauração de Veículos Antigos
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-8 lg:mt-0">
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Rua Risoleta Caetano, 444, Pq. Lafaiete, Duque de Caxias, RJ</span>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">contatowfautocenter@gmail.com.br</span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">
                    (21) 96465-6773
                    <br />
                    (21) 98276-5589
                    <br />
                    (21) 3134-6492
                  </span>
                </li>
                <li className="flex">
                  <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">
                    Segunda a Sexta: 8H às 18H
                    <br />
                    Sábado: 8H às 12H
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} WF Auto Center. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}