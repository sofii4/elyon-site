import { useEffect, useRef, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import lionImg from '../assets/images/2.png'

const WHATSAPP_URL = `https://wa.me/5549999999999?text=${encodeURIComponent('Olá! Gostaria de conversar sobre meu projeto.')}`

export default function HeroSection() {
  const textRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const [showLion, setShowLion] = useState(false)

  useEffect(() => {
    // Stagger animation on mount
    const els = [textRef.current, subtitleRef.current, ctaRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      setTimeout(() => {
        el.style.transition = 'opacity 1s ease, transform 1s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 250)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowLion(true), 700)
    return () => clearTimeout(timer)
  }, [])

  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-elyon-dark">

      {/* BACKGROUND: imagem de obra premium com overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
          alt="Obra de alto padrão Elyon"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-elyon-dark via-elyon-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-elyon-dark via-transparent to-elyon-dark/30" />
        {/* Grade arquitetônica */}
        <div className="absolute inset-0 arch-grid opacity-40" />
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            {/* TÍTULO PRINCIPAL */}
            <div ref={subtitleRef} className="mb-8">
              <div className="overflow-hidden mb-2">
                <h1 className="font-aktiv font-bold leading-none text-[clamp(5rem,14vw,11rem)] text-elyon-gold tracking-tighter">
                  ELYON
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="font-aktiv font-light text-[clamp(1.5rem,4vw,3rem)] text-white/90 tracking-[0.15em] uppercase leading-tight">
                  Construções
                </h2>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <div className="h-px w-24 bg-elyon-gold" />
                <div className="h-1 w-1 rounded-full bg-elyon-gold" />
                <div className="h-px w-8 bg-elyon-gold/40" />
              </div>

              <p className="font-arimo text-white/60 text-lg leading-relaxed mt-6 max-w-xl">
                Transformamos visões em legados. Cada projeto é conduzido com a precisão técnica
                e o cuidado que a sua conquista merece.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-elyon-gold hover:bg-elyon-gold-light text-elyon-dark font-aktiv font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-elyon-gold/20"
              >
                <MessageCircle size={18} />
                Fale com um Especialista
              </a>
              <button
                onClick={() => document.getElementById('obras')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 border border-white/20 hover:border-elyon-gold text-white/70 hover:text-elyon-gold font-arimo text-sm px-8 py-4 tracking-wider uppercase transition-all duration-300"
              >
                Ver Nossas Obras
              </button>
            </div>

            
          </div>

          
        </div>
      </div>

      {/* SETA SCROLL DOWN */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-elyon-gold/50 hover:text-elyon-gold transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
