import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const obras = [
  {
    id: 1,
    title: 'Residência Vista Verde',
    tipo: 'Alto Padrão',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Edifício Solaris',
    tipo: 'Corporativo',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Casa Serra & Lago',
    tipo: 'Residencial',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Condomínio Alvorada',
    tipo: 'Incorporação',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Loft Centro Histórico',
    tipo: 'Comercial',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Villa Montanha Azul',
    tipo: 'Alto Padrão',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80&auto=format&fit=crop',
  },
]

// Duplica para carrossel infinito
const obrasLoop = [...obras, ...obras]

function ObrasCard({ obra }) {
  return (
    <div className="flex-shrink-0 w-72 md:w-80 relative group overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={obra.img}
          alt={obra.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {/* Overlay hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-elyon-dark via-elyon-dark/0 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="font-arimo text-elyon-gold text-xs tracking-widest uppercase mb-1">
          {obra.tipo}
        </div>
        <h3 className="font-aktiv font-bold text-white text-lg">{obra.title}</h3>
        <div className="h-px w-0 group-hover:w-full bg-elyon-gold transition-all duration-500 mt-3" />
      </div>
    </div>
  )
}

export default function WorksSection() {
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.2 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="obras" className="py-28 bg-elyon-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-elyon-gold" />
              <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">Portfólio</span>
            </div>
            <h2 className="font-aktiv font-bold text-4xl md:text-5xl text-white">
              Conheça nossas <span className="text-elyon-gold">Obras</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group flex items-center gap-3 border border-elyon-gold/30 hover:border-elyon-gold text-elyon-gold font-arimo text-sm px-6 py-3 tracking-wider uppercase transition-all duration-300 hover:bg-elyon-gold hover:text-elyon-dark self-start md:self-auto"
          >
            Ver portfólio completo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* CARROSSEL AUTO-SCROLL */}
      <div className="relative">
        {/* Fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-elyon-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-elyon-dark to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="carousel-track gap-5 px-6">
            {obrasLoop.map((obra, i) => (
              <ObrasCard key={`${obra.id}-${i}`} obra={obra} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
