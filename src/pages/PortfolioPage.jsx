import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Maximize2, BedDouble, Bath, MessageCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const WHATSAPP_URL = `https://wa.me/5549999999999?text=${encodeURIComponent('Olá! Tenho interesse em um dos empreendimentos do portfólio Elyon.')}`

const projects = [
  {
    id: 1,
    title: 'Residência Vista Verde',
    description:
      'Uma residência de alto padrão projetada para integrar o interior ao paisagismo exuberante. Cada ambiente foi pensado para maximizar a luz natural e criar fluxos harmoniosos entre os espaços sociais e íntimos.',
    local:    'Xanxerê, SC',
    area:     '480 m²',
    quartos:  4,
    banheiros: 5,
    tipo:     'Residencial Alto Padrão',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop',
    ano: '2024',
  },
  {
    id: 2,
    title: 'Edifício Solaris',
    description:
      'Empreendimento corporativo de 12 pavimentos com fachada envidraçada e sistemas de eficiência energética. Projetado para ser referência em sustentabilidade e modernidade no Centro-Oeste catarinense.',
    local:    'Chapecó, SC',
    area:     '6.200 m²',
    quartos:  0,
    banheiros: 24,
    tipo:     'Corporativo',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop',
    ano: '2023',
  },
  {
    id: 3,
    title: 'Casa Serra & Lago',
    description:
      'Residência de fim de semana com conceito de integração total com a natureza. Estrutura em concreto aparente e madeira de reflorestamento, piscina natural e jardim com espelho d\'água.',
    local:    'Xanxerê, SC',
    area:     '320 m²',
    quartos:  3,
    banheiros: 4,
    tipo:     'Residencial — Casa de Campo',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80&auto=format&fit=crop',
    ano: '2023',
  },
  {
    id: 4,
    title: 'Condomínio Alvorada',
    description:
      'Condomínio residencial fechado com 32 unidades, área de lazer completa, portaria 24h e infraestrutura para veículos elétricos. Localizado em área nobre com acesso rápido ao centro.',
    local:    'Xanxerê, SC',
    area:     '12.400 m² (total)',
    quartos:  3,
    banheiros: 3,
    tipo:     'Incorporação — Condomínio',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80&auto=format&fit=crop',
    ano: '2022',
  },
  {
    id: 5,
    title: 'Loft Centro Histórico',
    description:
      'Reforma completa e retrofit de um edifício histórico transformado em lofts comerciais premium. O projeto preservou a essência arquitetônica original enquanto incorporou tecnologia e modernidade.',
    local:    'Chapecó, SC',
    area:     '1.800 m²',
    quartos:  0,
    banheiros: 12,
    tipo:     'Comercial — Retrofit',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80&auto=format&fit=crop',
    ano: '2022',
  },
  {
    id: 6,
    title: 'Villa Montanha Azul',
    description:
      'Mansão residencial com projeto paisagístico premiado, piscina aquecida, adega climatizada e espaço gourmet externo. Um dos projetos mais ambiciosos já executados pela Elyon em termos de refinamento.',
    local:    'Xanxerê, SC',
    area:     '780 m²',
    quartos:  5,
    banheiros: 6,
    tipo:     'Residencial — Mansão',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80&auto=format&fit=crop',
    ano: '2021',
  },
  {
    id: 7,
    title: 'Clínica Harmonia',
    description:
      'Complexo clínico com projeto arquitetônico humanizado, priorizando conforto e acolhimento dos pacientes. Ambientes projetados para reduzir estresse e promover bem-estar durante o atendimento.',
    local:    'Xanxerê, SC',
    area:     '2.200 m²',
    quartos:  0,
    banheiros: 18,
    tipo:     'Saúde — Clínica',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=80&auto=format&fit=crop',
    ano: '2021',
  },
  {
    id: 8,
    title: 'Residência Pedra & Aço',
    description:
      'Casa minimalista brutalista com fachada em pedra canga e estrutura de aço aparente. Interior de conceito aberto com pé-direito duplo, integração total sala-varanda e automação residencial completa.',
    local:    'Chapecó, SC',
    area:     '540 m²',
    quartos:  4,
    banheiros: 5,
    tipo:     'Residencial — Brutalista',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop',
    ano: '2020',
  },
]

function ProjectCard({ project, reverse }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal grid grid-cols-1 lg:grid-cols-2 min-h-[520px] ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
    >
      {/* IMAGEM */}
      <div className="relative overflow-hidden h-72 lg:h-auto group">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-elyon-dark/60 to-transparent lg:bg-none" />
        {/* Ano badge */}
        <div className="absolute top-6 left-6 font-aktiv font-bold text-xs tracking-[0.3em] text-elyon-gold border border-elyon-gold/40 bg-elyon-dark/60 backdrop-blur-sm px-4 py-2 uppercase">
          {project.ano}
        </div>
      </div>

      {/* TEXTO */}
      <div className="flex items-center bg-elyon-dark-2 px-8 md:px-14 py-12 lg:py-16 border border-elyon-gold/5">
        <div>
          {/* Tipo */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-elyon-gold" />
            <span className="font-arimo text-elyon-gold text-xs tracking-[0.3em] uppercase">{project.tipo}</span>
          </div>

          <h3 className="font-aktiv font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="font-arimo text-white/55 leading-relaxed mb-8 text-base">
            {project.description}
          </p>

          {/* Especificações */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 text-white/50">
              <MapPin size={15} className="text-elyon-gold flex-shrink-0" />
              <span className="font-arimo text-sm">{project.local}</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <Maximize2 size={15} className="text-elyon-gold flex-shrink-0" />
              <span className="font-arimo text-sm">{project.area}</span>
            </div>
            {project.quartos > 0 && (
              <div className="flex items-center gap-3 text-white/50">
                <BedDouble size={15} className="text-elyon-gold flex-shrink-0" />
                <span className="font-arimo text-sm">{project.quartos} quartos</span>
              </div>
            )}
            <div className="flex items-center gap-3 text-white/50">
              <Bath size={15} className="text-elyon-gold flex-shrink-0" />
              <span className="font-arimo text-sm">{project.banheiros} banheiros</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-elyon-gold/30 hover:border-elyon-gold hover:bg-elyon-gold hover:text-elyon-dark text-elyon-gold font-arimo text-xs px-6 py-3 tracking-widest uppercase transition-all duration-300"
          >
            <MessageCircle size={14} />
            Tenho interesse
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  // Scroll para o topo ao entrar na página
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <Header />
      <main className="bg-elyon-dark min-h-screen">

        {/* HERO DO PORTFOLIO */}
        <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 arch-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-elyon-navy/30 to-transparent" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-elyon-gold/60 hover:text-elyon-gold font-arimo text-sm tracking-widest uppercase transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              Voltar ao site
            </Link>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-px bg-elyon-gold/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-elyon-gold" />
              <span className="w-12 h-px bg-elyon-gold/40" />
            </div>

            <h1 className="font-aktiv font-bold text-5xl md:text-7xl text-white mb-6">
              Portfólio <span className="text-elyon-gold">Completo</span>
            </h1>
            <p className="font-arimo text-white/55 text-xl leading-relaxed">
              Cada projeto é a prova do nosso compromisso com a excelência.
              Conheça os empreendimentos que definem o padrão Elyon.
            </p>
          </div>
        </div>

        {/* PROJETOS */}
        <div className="divide-y divide-elyon-gold/5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* SEÇÃO CTA FINAL */}
        <div className="py-24 px-6 text-center bg-elyon-dark-2 relative overflow-hidden">
          <div className="absolute inset-0 arch-grid opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-aktiv font-bold text-4xl text-white mb-4">
              Pronto para o seu <span className="text-elyon-gold">próximo projeto?</span>
            </h2>
            <p className="font-arimo text-white/50 mb-8 text-lg">
              Fale com nossa equipe e descubra como a Elyon pode transformar a sua ideia em realidade.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-elyon-gold hover:bg-elyon-gold-light text-elyon-dark font-aktiv font-bold px-8 py-4 tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-xl shadow-elyon-gold/20"
            >
              <MessageCircle size={20} />
              Falar com a Elyon
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
