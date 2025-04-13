"use client";

import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  WineIcon as Facebook, Instagram, Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BeforeAfterSimpleRow } from "@/components/antes_depois";

export default function Home() {
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

  return (
    <div className="flex min-h-screen flex-col">
      {/* ===== HEADER / NAVEGAÇÃO ===== */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
        <div className="container flex h-16 sm:h-20 items-center justify-between py-2 px-4 lg:px-8 mx-auto">
          <div className="flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:brightness-110">
            <img
              src="/logo/AUTOCENTER.png"
              alt="WF Auto Center Logo"
              className="h-30 sm:h-47 rounded-md"
            />
          </div>
          
          <nav className="hidden md:flex gap-4 lg:gap-8">
            {[
              { href: "/", label: "Início" },
              { href: "#services", label: "Serviços" },
              { href: "#gallery", label: "Antes e Depois" },
              { href: "#about", label: "Sobre Nós" },
              { href: "#contact", label: "Contato" }
            ].map((link) => (
              <a 
                href={link.href} 
                className="text-sm font-medium relative group px-1 py-2" 
                key={link.href}
              >
                <span className="text-gray-800 hover:text-orange-600 transition-colors duration-200">{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center">
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-5 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="tel:+5500000000000" className="flex items-center gap-3">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="font-bold text-white text-sm whitespace-nowrap">Agendar Agora</span>
              </a>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
            <span className="sr-only">Abrir menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-800">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* ===== SEÇÃO HERO ===== */}
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-background to-muted">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="grid gap-8 items-center text-center lg:text-left lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 mx-auto lg:mx-0 max-w-[600px] w-full">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl text-orange-600 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none italic">
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
      
      <div className="mb-6 lg:mb-0 order-1 lg:order-2 flex justify-center mx-auto w-full">
        <div className="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[580px]">
          <Image
            src="/logo/homebaner.png"
            width={600}
            height={400}
            alt="Carro sendo restaurado"
            className="overflow-hidden rounded-xl object-cover w-full h-auto shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ===== SEÇÃO DE SERVIÇOS ===== */}
        <section id="services" className="py-16 bg-muted/50 px-4 sm:px-6">
  <div className="container mx-auto">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
          <span className="bg-orange-500 text-transparent bg-clip-text">
            Nossos Serviços
          </span>
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto"></div>
      </div>

      <div className="max-w-[900px] text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
        Veja a transformação que realizamos em cada veículo que passa por nossas mãos.
      </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
      {[
        {
          title: "Funilaria",
          description: "Reparos estruturais com precisão para devolver a integridade do seu veículo.",
          video: "/videos/lanternagem.mp4",
          poster: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "Pintura",
          description: "Pintura de alta qualidade com acabamento perfeito e cores originais.",
          video: "/videos/pintura.mp4",
          poster: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "Polimento Técnico",
          description: "Recuperação do brilho e proteção da pintura do seu veículo.",
          video: "/videos/polimento.mp4",
          poster: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "Higienização",
          description: "Limpeza profunda que elimina germes e odores, deixando seu carro como novo.",
          video: "/videos/higienização.mp4",
          poster: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "Personalização",
          description: "Customização do seu veículo de acordo com seu estilo e preferências.",
          video: "/videos/personalizacao.mp4",
          poster: "/placeholder.svg?height=300&width=400",
        },
        {
          title: "Restauração de Veículos Antigos",
          description: "Devolvemos a vida e o charme original aos clássicos com cuidado e expertise.",
          video: "/videos/restauracao.mp4",
          poster: "/placeholder.svg?height=300&width=400",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <div className="relative h-100">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              src={service.video} 
              poster={service.poster}
              muted
              loop
              playsInline
              autoPlay // Adicionado para iniciar automaticamente
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
            <Button variant="link" className="mt-4 p-0" asChild>
              <Link href="#contact">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* Componente Antes e Depois */}
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
              {/* Componente de fileira de imagens simples */}
              <BeforeAfterSimpleRow images={images} />
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO SOBRE NÓS ===== */}
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
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Equipe WF Auto Center"
                  className="rounded-xl object-cover w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO DE CONTATO ===== */}
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
              <button className="group relative overflow-hidden bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 sm:px-10 md:px-16 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                <span className="relative z-10 text-lg">Fazer Orçamento</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:animate-shine"></div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ===== RODAPÉ ===== */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                  <Image
                    src="/logo/icone.jpg"
                    alt="WF Auto Center Logo"
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                </div>
                <span className="text-xl font-bold">WF Auto Center</span>
              </Link>
              <p className="text-slate-300 mb-4">
                Excelência em funilaria, pintura e restauração de veículos em Duque de Caxias.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
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

      {/* ===== BOTÃO WHATSAPP FLUTUANTE ===== */}
      <WhatsAppButton phoneNumber="5521964656773" />
    </div>
  );
}