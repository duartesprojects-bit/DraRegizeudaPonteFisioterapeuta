export default function About() {
  return (
    <section id="sobre" className="py-24 bg-teal-900 text-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0 relative flex justify-center">
            <div 
              className="relative w-full max-w-md aspect-square overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                boxShadow: '0 25px 50px -12px rgba(20, 184, 166, 0.25)'
              }}
            >
              <img
                src="/img/foto.jpeg"
                alt="Dra. Regizeuda Ponte"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Accents */}
            <div 
              className="absolute -z-10 w-full max-w-md aspect-square bg-teal-800 mix-blend-multiply filter blur-2xl opacity-50 animate-blob"
              style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            ></div>
          </div>
          
          <div>
            <span className="text-teal-300 font-semibold tracking-wider uppercase text-sm mb-4 block">Sobre a Profissional</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Dra. Regizeuda Ponte
            </h2>
            <div className="space-y-6 text-teal-100 text-lg leading-relaxed">
              <p>
                Com dedicação exclusiva à reabilitação e ao alívio da dor, busco ir além dos tratamentos convencionais. Meu objetivo é proporcionar um atendimento humanizado, focado não apenas em tratar os sintomas, mas em descobrir e tratar a raiz do seu problema.
              </p>
              <p>
                Acredito que o corpo humano trabalha de forma integrada. Por isso, utilizo técnicas avançadas como Osteopatia, RPG e Terapias Manuais para restaurar o seu equilíbrio natural.
              </p>
              <p>
                Cada paciente é único, e cada plano de tratamento é desenhado para devolver a sua autonomia, permitindo que você volte a realizar as atividades que ama, sem dor e com mais qualidade de vida.
              </p>
            </div>
            
            <div className="mt-10">
              <a
                href="https://wa.me/5585988307687"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-teal-900 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-stone-100 transition-colors shadow-sm"
              >
                Fale comigo no WhatsApp
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
