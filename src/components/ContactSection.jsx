import { MessageCircle, Instagram, Facebook, Linkedin, Phone, Mail } from 'lucide-react'

const WHATSAPP_NUMBER = '5549999999999'
const WHATSAPP_MSG    = encodeURIComponent('Olá! Vim pelo site da Elyon Construções e gostaria de conversar sobre meu projeto.')
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      {/* BACKGROUND: textura de concreto escura */}
      <div className="absolute inset-0 bg-[#0e0e0d]">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-elyon-dark/90 via-[#0e0e0d]/80 to-elyon-dark/90" />
        <div className="absolute inset-0 arch-grid opacity-10" />
      </div>

      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-elyon-gold/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Ícone decorativo */}
        <div className="w-16 h-16 border border-elyon-gold/30 flex items-center justify-center mx-auto mb-8">
          <MessageCircle size={28} className="text-elyon-gold" />
        </div>

        <div className="flex items-center justify-center gap-4 mb-4">
          
          <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">Entre em contato</span>
          
        </div>

        <h2 className="font-aktiv font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
          Fale <span className="text-elyon-gold">Conosco</span>
        </h2>

        <p className="font-arimo text-white/60 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Seu projeto merece atenção de especialistas. Entre em contato agora mesmo
          e descubra como a Elyon pode transformar sua visão em realidade.
        </p>

        {/* BOTÃO WHATSAPP */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-elyon-gold text-elyon-dark font-aktiv font-bold text-lg px-10 py-5 tracking-widest uppercase transition-all duration-300 hover:bg-elyon-gold-light hover:scale-105 active:scale-95 shadow-2xl shadow-elyon-gold/20"
        >
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Iniciar Conversa no WhatsApp
        </a>

        {/* Linha divisória */}
        <div className="flex items-center gap-6 my-12">
          <div className="flex-1 h-px bg-white/10" />
          <span className="font-arimo text-white/30 text-xs tracking-widest uppercase">ou nos encontre em</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Infos + Redes sociais */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a href="tel:5549999999999" className="flex items-center gap-3 text-white/50 hover:text-elyon-gold transition-colors font-arimo">
            <Phone size={18} />
            (49) 9 9999-9999
          </a>
          <a href="mailto:contato@elyonconstrucoes.com.br" className="flex items-center gap-3 text-white/50 hover:text-elyon-gold transition-colors font-arimo">
            <Mail size={18} />
            contato@elyonconstrucoes.com.br
          </a>
        </div>

        <div className="flex justify-center gap-5 mt-8">
          {[
            { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
            { Icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook'  },
            { Icon: Linkedin,  href: 'https://linkedin.com',  label: 'LinkedIn'  },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 border border-white/10 hover:border-elyon-gold flex items-center justify-center text-white/40 hover:text-elyon-gold transition-all duration-300 hover:bg-elyon-gold/5"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
