import { MapPin, Phone, Clock, Accessibility } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Localização e Contato</h2>
          <p className="text-lg text-stone-600">
            Fácil acesso e estrutura completa para o seu atendimento em Fortaleza.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 mb-10 lg:mb-0">
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-xl mr-4 shrink-0">
                  <MapPin className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Endereço</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Edifício Harmony Premium<br />
                    Av. Humberto Monte, 2929, Sala 211, Torre Sul<br />
                    Pici, Fortaleza – CE<br />
                    CEP: 60440-593
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-xl mr-4 shrink-0">
                  <Clock className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-stone-600 leading-relaxed">
                    Segunda a Sexta: 08:00 às 19:00<br />
                    Sábado: 08:00 às 12:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-xl mr-4 shrink-0">
                  <Phone className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Contato / WhatsApp</h4>
                  <p className="text-stone-600 leading-relaxed mb-3">
                    (85) 98830-7687
                  </p>
                  <a
                    href="https://wa.me/5585988307687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors"
                  >
                    Enviar mensagem &rarr;
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-xl mr-4 shrink-0">
                  <Accessibility className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg mb-1">Acessibilidade</h4>
                  <ul className="text-stone-600 space-y-1">
                    <li>• Banheiro com acessibilidade</li>
                    <li>• Entrada acessível</li>
                    <li>• Estacionamento acessível</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-sm border border-stone-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m15!1m10!1m3!1d3.1748630167329774!2d-38.569303!3d-3.7373969999999996!2m1!1f0!3m2!1i1024!2i768!4f73.88152133329551!3m3!1m2!1s0x7c74bfa86c3d5ff%3A0xf12259105bb1a99a!2sDra%20Regizeuda%20-%20Fisioterapia%20Especializada%20em%20Coluna%20-%20Osteopatia%20-%20RPG%20-%20Fortaleza%2FCE!4v1788911050836"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
