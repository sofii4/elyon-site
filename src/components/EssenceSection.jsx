import { useEffect, useRef } from 'react'

const pillars = [
  { num: '01', title: 'Excelência',     text: 'Cada detalhe é tratado com rigor técnico e comprometimento absoluto com a qualidade.' },
  { num: '02', title: 'Transparência',  text: 'Processos claros, relatórios honestos e comunicação aberta em cada etapa da obra.' },
  { num: '03', title: 'Compromisso',    text: 'Prazos e orçamentos são compromissos sagrados. Respeitamos o seu tempo e o seu dinheiro.' },
]

export default function EssenceSection() {
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
    <section id="essencia" className="py-28 relative overflow-hidden">
      {/* Background com textura e cor naval */}
      <div className="absolute inset-0 bg-elyon-navy" />
      <div className="absolute inset-0 arch-grid opacity-20" />
      {/* Imagem de fundo sutil */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=60"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ESQUERDA: Texto */}
          <div ref={(el) => (refs.current[0] = el)} className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-elyon-gold" />
              <span className="font-arimo text-elyon-gold text-xs tracking-[0.4em] uppercase">
                Visão da Empresa
              </span>
            </div>

            <h2 className="font-aktiv font-bold text-4xl md:text-5xl text-white leading-tight mb-8">
              Nossa <span className="text-elyon-gold">Essência</span>
            </h2>

            <p className="font-arimo text-white/70 text-lg leading-relaxed mb-6">
              A palavra <em>Elyon</em> significa <strong className="text-elyon-gold font-semibold">"o mais elevado"</strong>.
              Esse não é apenas um nome — é uma promessa. É a diretriz que guia cada decisão,
              cada projeto e cada relação que construímos.
            </p>
            <p className="font-arimo text-white/60 leading-relaxed mb-6">
              Acreditamos que uma construção vai além do concreto e do aço. É a materialização
              de um sonho, a proteção de uma família, o abrigo de uma história. Por isso,
              tratamos cada obra como se fosse a nossa.
            </p>
            <p className="font-arimo text-white/60 leading-relaxed">
              Com expertise técnica, gestão rigorosa e um profundo respeito por quem nos confia
              seus projetos, entregamos não apenas edificações — entregamos legados.
            </p>

            {/* Citação */}
            <blockquote className="mt-10 pl-6 border-l-2 border-elyon-gold">
              <p className="font-aktiv font-light text-xl text-white/80 italic">
                "Construir bem é um ato de respeito — pelo espaço, pelo tempo e por quem vai viver nele."
              </p>
              <cite className="font-arimo text-elyon-gold text-sm mt-3 block not-italic tracking-wider">
                — Equipe Elyon Construções
              </cite>
            </blockquote>
          </div>

          {/* DIREITA: Pilares */}
          <div className="flex flex-col gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.num}
                ref={(el) => (refs.current[i + 1] = el)}
                className="reveal border border-white/10 hover:border-elyon-gold/40 p-6 bg-elyon-dark/40 backdrop-blur-sm transition-all duration-500 group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-5">
                  <span className="font-aktiv font-bold text-elyon-gold/20 group-hover:text-elyon-gold/60 text-4xl leading-none transition-colors duration-500 flex-shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-aktiv font-bold text-white text-lg mb-2 group-hover:text-elyon-gold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="font-arimo text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                      {p.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
