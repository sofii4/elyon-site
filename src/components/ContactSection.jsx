import { useEffect, useRef } from 'react'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

const WHATSAPP_NUMBER = '5549999999999'
const WHATSAPP_MSG    = encodeURIComponent('Olá! Vim pelo site da Elyon Construções e gostaria de conversar sobre meu projeto.')
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

const socials = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook'  },
  { Icon: Linkedin,  href: 'https://linkedin.com',  label: 'LinkedIn'  },
]

export default function ContactSection() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contato" className="py-28 bg-elyon-dark relative overflow-hidden">
      <div className="absolute inset-0 arch-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elyon-gold/30 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Label */}
        <div
          ref={(el) => (refs.current[0] = el)}
          className="reveal flex items-center justify-center gap-4 mb-6"
        >
          <span className="w-8 h-px bg-elyon-gold/40" />
          <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">Entre em contato</span>
          <span className="w-8 h-px bg-elyon-gold/40" />
        </div>

        {/* Headline */}
        <h2
          ref={(el) => (refs.current[1] = el)}
          className="reveal font-aktiv font-bold text-5xl md:text-6xl text-white mb-6 leading-tight"
          style={{ transitionDelay: '100ms' }}
        >
          Fale <span className="text-elyon-gold">Conosco</span>
        </h2>

        {/* Subtitle */}
        <p
          ref={(el) => (refs.current[2] = el)}
          className="reveal font-arimo text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ transitionDelay: '200ms' }}
        >
          Seu projeto merece atenção de especialistas. Conte-nos sua ideia e vamos construí-la juntos.
        </p>

        {/* WhatsApp CTA */}
        <div
          ref={(el) => (refs.current[3] = el)}
          className="reveal mb-12"
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-elyon-gold text-elyon-dark font-aktiv font-bold text-sm px-10 py-5 tracking-widest uppercase transition-all duration-300 hover:bg-elyon-gold-light hover:scale-105 active:scale-95 shadow-lg shadow-elyon-gold/20"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Iniciar Conversa no WhatsApp
          </a>
        </div>

        {/* Social icons */}
        <div
          ref={(el) => (refs.current[4] = el)}
          className="reveal flex justify-center gap-4"
          style={{ transitionDelay: '400ms' }}
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 border border-white/10 hover:border-elyon-gold flex items-center justify-center text-white/30 hover:text-elyon-gold transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
