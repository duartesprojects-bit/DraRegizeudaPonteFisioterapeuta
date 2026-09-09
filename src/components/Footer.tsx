import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Dra. Regizeuda Ponte</h3>
          <p className="text-teal-200 mb-4">
            Fisioterapia especializada em coluna, Osteopatia e RPG. Cuidar do movimento é cuidar da vida.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contato</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Phone className="w-5 h-5 mr-3 text-teal-400 shrink-0" />
              <span>(85) 98830-7687</span>
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-teal-400 shrink-0" />
              <span>
                Edifício Harmony Premium<br />
                Av. Humberto Monte, 2929, Sala 211, Torre Sul<br />
                Pici, Fortaleza – CE
              </span>
            </li>
            <li className="flex items-start">
              <Instagram className="w-5 h-5 mr-3 text-teal-400 shrink-0" />
              <a href="https://instagram.com/regizeudafisioterapia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @regizeudafisioterapia
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Horário de Funcionamento</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Clock className="w-5 h-5 mr-3 text-teal-400 shrink-0" />
              <div>
                <p>Segunda a Sexta: 08:00 às 19:00</p>
                <p>Sábado: 08:00 às 12:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-teal-800 text-center text-sm text-teal-300">
        <p>&copy; {new Date().getFullYear()} Dra. Regizeuda Fisioterapia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
