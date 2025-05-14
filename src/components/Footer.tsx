
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-fatec-green text-white py-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">4ª Semana de Tecnologia</h3>
            <p className="text-sm mb-2">Fatec Tatuí</p>
            <p className="text-sm">12 a 16 de Maio de 2025</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link to="/programacao" className="text-sm hover:underline">Programação</Link></li>
              <li><Link to="/contato" className="text-sm hover:underline">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <p className="text-sm mb-2">Rodovia Mário Batista Mori, 971</p>
            <p className="text-sm mb-2">Jardim Aeroporto - Tatuí/SP</p>
            <p className="text-sm">CEP 18280-000</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Fatec Tatuí. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
