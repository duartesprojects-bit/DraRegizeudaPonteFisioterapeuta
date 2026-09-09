import { Activity, PersonStanding, CheckCircle2 } from 'lucide-react';

const specialties = [
  {
    id: 'coluna',
    icon: Activity,
    title: 'Especializada em Coluna',
    description: 'Tratamento conservador e eficaz para hérnia de disco, dores lombares, cervicais e alterações posturais. Foco na causa, não apenas nos sintomas.',
    benefits: ['Alívio da dor e melhora da mobilidade', 'Prevenção de cirurgias em muitos casos', 'Tratamento personalizado']
  },
  {
    id: 'osteopatia',
    icon: CheckCircle2,
    title: 'Osteopatia',
    description: 'Terapia manual que busca o equilíbrio do corpo. Avalia o paciente de forma integral para encontrar a origem das tensões e restaurar o bem-estar.',
    benefits: ['Atendimento global e integrativo', 'Restabelecimento do equilíbrio corporal', 'Técnicas manuais seguras']
  },
  {
    id: 'rpg',
    icon: PersonStanding,
    title: 'RPG (Reeducação Postural)',
    description: 'Método fisioterapêutico para correção de posturas inadequadas, alívio de tensões musculares e tratamento de dores crônicas.',
    benefits: ['Melhora significativa da postura', 'Alongamento das cadeias musculares', 'Consciência corporal']
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Nossas Especialidades</h2>
          <p className="text-lg text-stone-600">
            Técnicas avançadas e integrativas para proporcionar os melhores resultados na sua reabilitação e qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-1">•</span>
                      <span className="text-stone-700 text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
