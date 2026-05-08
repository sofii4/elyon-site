import { useEffect, useRef } from 'react'
import {
  BarChart2, ClipboardList, Ruler, Settings, Building2, Wrench
} from 'lucide-react'

const services = [
  {
    icon: BarChart2,
    title: 'Estudo de Viabilidade',
    description:
      'Análise técnica e financeira completa do seu projeto antes de qualquer investimento, garantindo decisões seguras e fundamentadas.',
  },
  {
    icon: ClipboardList,
    title: 'Planejamento de Obra',
    description:
      'Cronogramas precisos, gestão de equipes e controle de etapas para que sua obra aconteça dentro do prazo e do orçamento.',
  },
  {
    icon: Ruler,
    title: 'Projetos',
    description:
      'Desenvolvimento de projetos arquitetônicos, estruturais e de instalações com excelência técnica e visão estética refinada.',
  },
  {
    icon: Settings,
    title: 'Administração',
    description:
      'Gestão completa da obra: compras, fornecedores, equipes e relatórios transparentes para que você acompanhe cada etapa.',
  },
  {
    icon: Building2,
    title: 'Incorporação',
    description:
      'Desenvolvimento de empreendimentos imobiliários do zero, desde a aquisição do terreno até a entrega das chaves.',
  },
  {
    icon: Wrench,
    title: 'Serviços',
    description:
      'Reformas, manutenções e serviços especializados em construção civil com o mesmo padrão de qualidade Elyon.',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" className="py-28 bg-elyon-dark relative overflow-hidden" ref={sectionRef}>
      {/* Detalhes decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-elyon-navy/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-elyon-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* CABEÇALHO */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-elyon-gold" />
            <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">
              O que fazemos
            </span>
          </div>
          <h2 className="font-aktiv font-bold text-4xl md:text-5xl text-white leading-tight">
            Nossos <span className="text-elyon-gold">Serviços</span>
          </h2>
          <p className="font-arimo text-white/50 text-lg mt-4 max-w-2xl">
            Da concepção à entrega, oferecemos soluções completas para projetos residenciais,
            comerciais e industriais com o selo Elyon de qualidade.
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className="reveal service-card border border-elyon-gold/10 hover:border-elyon-gold/40 bg-elyon-dark-2/50 p-8 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Ícone */}
                <div className="mb-6 w-12 h-12 border border-elyon-gold/20 group-hover:border-elyon-gold group-hover:bg-elyon-navy flex items-center justify-center transition-all duration-500">
                  <Icon
                    size={22}
                    className="text-elyon-gold/50 group-hover:text-elyon-gold transition-colors duration-500"
                  />
                </div>

                <h3 className="font-aktiv font-bold text-white text-xl mb-3 group-hover:text-elyon-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-arimo text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Linha dourada animada */}
                <div className="mt-6 h-px bg-elyon-gold/0 group-hover:bg-elyon-gold/40 transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
