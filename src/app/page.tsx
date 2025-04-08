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
  Menu,
  
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import {  BeforeAfterSimpleRow } from "@/components/antes_depois";





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
      before: '/imagem-antes-depois/corola-antes.jpg',
      after: '/imagem-antes-depois/corola-depois.jpg',
    }, 
    {
      before: '/imagem-antes-depois/uno-antes.jpg',
      after: '/imagem-antes-depois/uno-depois.jpg',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* ===== HEADER / NAVEGAÇÃO ===== */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between py-4 px-8">
        <Link href="http://localhost:3000/" className="flex items-center gap-3 transition-transform hover:scale-105">
          <Image
            src="/logo/AUTOCENTER.png"
            alt="WF Auto Center Logo"
            width={600}
            height={400}
            className="h-40 w-50 rounded-md"
          />
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium relative group">
            <span className="text-foreground hover:text-primary transition-colors duration-200">Início</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="text-sm font-medium relative group">
            <span className="text-foreground hover:text-primary transition-colors duration-200">Serviços</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#gallery" className="text-sm font-medium relative group">
            <span className="text-foreground hover:text-primary transition-colors duration-200">Antes e Depois</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#about" className="text-sm font-medium relative group">
            <span className="text-foreground hover:text-primary transition-colors duration-200">Sobre Nós</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" className="text-sm font-medium relative group">
            <span className="text-foreground hover:text-primary transition-colors duration-200">Contato</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="rounded-full px-4 border-orange-600 hover:bg-stone-200 hover:text-white transition-colors">
            <Link href="tel:+5500000000000">
              <span className="flex text-orange-600 items-center gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9 text-5xl hover:animate-bounce"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Agendar
              </span>
            </Link>
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-background hover:text-primary">
          <span className="sr-only">Abrir menu</span>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>


      <main className="flex-1">
        {/* ===== SEÇÃO HERO ===== */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
              
                <div className="space-y-2">
                  
                  <h1 className="text-3xl  text-orange-600 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none italic">
                    <span className="space-y-2">AUTO <span className="text-black space-y-2">CENTER</span></span>
                    <p className="text-black">WF LAMTERNAGEM <span className="text-orange-600">.</span></p>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Funilaria, pintura e restauração com qualidade e compromisso. Seu carro merece o melhor tratamento.
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#services">
                      Nossos Serviços
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button className="bg-orange-600" asChild variant="outline" size="lg">
                    <Link href="#contact">Agende uma Visita</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Carro sendo restaurado"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO DE SERVIÇOS ===== */}
        <section id="services" className="py-16 bg-muted/50 px-4 sm:px-6">
          <div className="container justify-center">
            <div className="text-center space-y- mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Serviços</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Oferecemos serviços completos de funilaria, pintura e restauração para transformar seu veículo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Funilaria",
                  description: "Reparos estruturais com precisão para devolver a integridade do seu veículo.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Pintura",
                  description: "Pintura de alta qualidade com acabamento perfeito e cores originais.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Polimento Técnico",
                  description: "Recuperação do brilho e proteção da pintura do seu veículo.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Higienização",
                  description: "Limpeza profunda que elimina germes e odores, deixando seu carro como novo.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Personalização",
                  description: "Customização do seu veículo de acordo com seu estilo e preferências.",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Restauração de Veículos Antigos",
                  description: "Devolvemos a vida e o charme original aos clássicos com cuidado e expertise.",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
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
          {/*compnente antes depois*/}
          <section id="gallery" className="w-full py-8 md:py-16 lg:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 w-full max-w-md">
            <h2 className="text-2xl font-bold rounded-full bg-orange-600 text-white px-6 py-2 tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Antes e Depois
           .Concurrent

            </h2>
          </div>
          <div className="max-w-[900px] text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
            Veja a transformação que realizamos em cada veículo que passa por nossas mãos.
          </div>
        </div>
        
        <div className="mx-auto max-w-5xl py-8 md:py-12">
          {/* Componente de fileira de imagens simples */}
          <BeforeAfterSimpleRow images={images} />
          
          {/* Logo adicional (opcional) */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-8 md:mt-12">
            <div className="relative aspect-video w-full">
              <Image
                src="/logo/AUTOCENTER.png"
                alt="AutoCenter Logo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* ===== SEÇÃO SOBRE NÓS ===== */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre a WF Auto Center</h2>
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
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Equipe WF Auto Center"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO DE CONTATO ===== */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos prontos para atender você e transformar seu veículo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p>Rua Risoleta Caetano, 444, Pq. Lafaiete, Duque de Caxias, RJ</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>contatowfautocenter@gmail.com.br</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="space-y-1">
                    <p>(21) 96465-6773</p>
                    <p>(21) 98276-5589</p>
                    <p>(21) 3134-6492</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="space-y-1">
                    <p>Segunda a Sexta: 8H às 18H</p>
                    <p>Sábado: 8H às 12H</p>
                  </div>
                </div>
                <div className="h-[300px] w-full rounded-xl overflow-hidden mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.7!4m5!3m4!1s0x0:0x0!8m2!3d-22.7!4d-43.3!"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Envie uma Mensagem</h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Telefone
                      </label>
                      <input
                        id="phone"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="funilaria">Funilaria</option>
                      <option value="pintura">Pintura</option>
                      <option value="polimento">Polimento Técnico</option>
                      <option value="higienizacao">Higienização</option>
                      <option value="personalizacao">Personalização</option>
                      <option value="restauracao">Restauração de Veículos Antigos</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva seu veículo e o serviço desejado"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== RODAPÉ ===== */}
      <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative h-40 w-30">
                <Image
                  src="/logo/icone.jpg"
                  alt="WF Auto Center Logo"
                  width={600}
            height={400}
            className="h-40 w-50 rounded-md"
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos#funilaria" className="text-slate-300 hover:text-white transition-colors">
                  Funilaria
                </Link>
              </li>
              <li>
                <Link href="/servicos#pintura" className="text-slate-300 hover:text-white transition-colors">
                  Pintura
                </Link>
              </li>
              <li>
                <Link href="/servicos#polimento" className="text-slate-300 hover:text-white transition-colors">
                  Polimento Técnico
                </Link>
              </li>
              <li>
                <Link href="/servicos#higienizacao" className="text-slate-300 hover:text-white transition-colors">
                  Higienização
                </Link>
              </li>
              <li>
                <Link href="/servicos#personalizacao" className="text-slate-300 hover:text-white transition-colors">
                  Personalização
                </Link>
              </li>
              <li>
                <Link href="/servicos#restauracao" className="text-slate-300 hover:text-white transition-colors">
                  Restauração de Veículos Antigos
                </Link>
              </li>
            </ul>
          </div>

          <div>
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
  )
}

