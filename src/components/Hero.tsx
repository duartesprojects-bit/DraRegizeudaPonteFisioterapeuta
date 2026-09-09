import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wide mb-6">
              Fisioterapia Especializada
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-6 leading-tight">
              Cuidar do movimento <span className="text-teal-700 block mt-2">é cuidar da vida.</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Atendimento individualizado com olhar global e tratamentos que promovem saúde, bem-estar e qualidade de vida em Fortaleza.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://wa.me/5585988307687"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-teal-700 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-teal-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Agende sua avaliação
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#especialidades"
                className="w-full sm:w-auto inline-flex items-center justify-center text-teal-700 bg-white border border-teal-200 px-8 py-3.5 rounded-full text-lg font-medium hover:bg-stone-50 transition-colors"
              >
                Conheça os tratamentos
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-teal-100 rounded-[3rem] transform rotate-3 scale-105 opacity-50 hidden md:block"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img
                src="/img/drRegizeuda2.png"
                alt="Dra. Regizeuda"
                className="object-cover w-full h-full object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
