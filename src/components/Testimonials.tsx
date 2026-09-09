import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Kaio Machado',
    role: 'Local Guide',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU8yNmJqUMpJqdgzFo01zgmG8TUaMZkmFj6Vyy-4me7ybiXYA0=w36-h36-p-rp-mo-ba12-br100',
    content: 'Sem arrodeio, ela é responsável pela minha volta ao esporte que amo, o Jiu Jitsu. Dra. Regizeuda é a profissional que todo mundo deveria encontrar antes de se machucar, seja no esporte ou no dia a dia. Sou grato por sua competência porque, antes dela, rodei em vários profissionais e nenhum atacou a raiz dos meus problemas como ela conseguiu. Recomendo com extrema confiança!',
  },
  {
    id: 2,
    name: 'Rose Rocha',
    role: 'Paciente',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV2CzoxZ5_k1Mo85Jof8RjZoB0ljDn3gy5pDg9Zq8hGssn1f0unfQ=w36-h36-p-rp-mo-br100',
    content: 'Excelente Fisio, atende toda minha família. Acho incrível o atendimento, pois consegui mesclar várias técnicas desde os exercícios até à quiropraxia. Ser humano maravilhoso e cheio de Deus. Indico muito mesmo!',
  },
  {
    id: 3,
    name: 'Isis Tomé',
    role: 'Paciente',
    avatar: null,
    content: 'Gostaria de agradecer imensamente o acolhimento humanizado dessa querida profissional. Quem está com dor quer ficar sem ela. Muitas vezes a dor emocional se transforma em dor física. A escuta foi muito importante para o atendimento. Fui muito bem tratada. Era tudo o que eu precisava.',
  },
  {
    id: 4,
    name: 'Sophia & Matheus Lima',
    role: 'Paciente',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWBzLs-G8Yp9UFteNh9i2nUQpTpb4V6TVLJ7kSbhSYBrVmC-CCC=w36-h36-p-rp-mo-br100',
    content: 'Atendimento diferenciado super recomendo, resultado quase de imediato obg Dra.',
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">O que dizem os pacientes</h2>
          <p className="text-lg text-stone-600">
            Avaliadas com 5 estrelas no Google. Histórias reais de recuperação e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col h-full">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-stone-700 italic flex-grow mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full mr-3 bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  {testimonial.role !== 'Paciente' && (
                    <span className="text-sm text-stone-500">{testimonial.role}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5585988307687"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-teal-700 text-white px-8 py-3.5 rounded-full text-lg font-medium hover:bg-teal-800 transition-colors shadow-sm"
          >
            Agende sua avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
