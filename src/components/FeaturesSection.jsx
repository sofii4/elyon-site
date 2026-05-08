import { useEffect, useRef } from 'react'
import {
  ShieldCheck, BarChart2, FileText, Clock, Heart
} from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Especialistas experientes',
    text: 'Profissionais com trajetória sólida em construção civil das mais diferentes naturezas — residencial, comercial e industrial.',
  },
  {
    icon: BarChart2,
    title: 'Controle de qualidade rigoroso',
    text: 'Processos de inspeção e verificação em cada etapa, garantindo que cada elemento esteja conforme os mais altos padrões técnicos.',
  },
  {
    icon: FileText,
    title: 'Organização e transparência',
    text: 'Relatórios claros, comunicação aberta e documentação completa em todos os processos. Você sempre sabe o que está acontecendo.',
  },
  {
    icon: Clock,
    title: 'Cumprimento de metas',
    text: 'Prazos e orçamentos são compromissos reais. Planejamos com rigor para entregar dentro do prometido, sem surpresas desagradáveis.',
  },
  {
    icon: Heart,
    title: 'Respeito com a sua conquista',
    text: 'Respeitamos profundamente o seu dinheiro, o seu tempo e o significado daquilo que você está construindo. Tratamos sua obra como se fosse nossa.',
  },
]

export default function FeaturesSection() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-28 bg-elyon-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 arch-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-elyon-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* CABEÇALHO */}
        <div
          ref={(el) => (refs.current[0] = el)}
          className="reveal text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-px bg-elyon-gold/40" />
            <div className="w-1 h-1 rounded-full bg-elyon-gold" />
            <span className="w-8 h-px bg-elyon-gold/40" />
          </div>
          <h2 className="font-aktiv font-bold text-4xl md:text-5xl text-white mb-4">
            O que você <span className="text-elyon-gold">encontra aqui</span>
          </h2>
          <p className="font-arimo text-white/50 text-lg max-w-2xl mx-auto">
            Escolher a Elyon é escolher ter ao seu lado uma equipe que combina competência técnica
            com genuíno cuidado com a sua obra.
          </p>
        </div>

        {/* LISTA DE ITENS */}
        <div className="max-w-4xl mx-auto space-y-px">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                ref={(el) => (refs.current[i + 1] = el)}
                className="reveal group flex items-start gap-6 p-7 bg-elyon-dark/50 hover:bg-elyon-navy/20 border border-transparent hover:border-elyon-gold/20 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Ícone */}
                <div className="flex-shrink-0 w-12 h-12 border border-elyon-gold/20 group-hover:border-elyon-gold group-hover:bg-elyon-navy flex items-center justify-center transition-all duration-500">
                  <Icon
                    size={22}
                    className="text-elyon-gold/50 group-hover:text-elyon-gold transition-colors duration-500"
                  />
                </div>

                {/* Texto */}
                <div>
                  <h3 className="font-aktiv font-bold text-white text-lg mb-2 group-hover:text-elyon-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-arimo text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {item.text}
                  </p>
                </div>

                
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
