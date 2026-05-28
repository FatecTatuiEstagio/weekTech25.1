
import { Link } from 'react-router-dom';

import LogoFatec from "./imgs/logo-fatec.png"
import LogoCps from "./imgs/logo-branco-cps.png"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre o Evento", href: "#sobre" },
    { label: "Programação", href: "#programacao" },
    { label: "Edições Anteriores", href: "#edicoes" },
  ]

  return (
    <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          {/* Logo + descrição */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={LogoFatec}
                alt="Fatec Tatuí"
                className="h-12 w-auto"
              />
              <img
                src={LogoCps}
                alt="Centro Paula Souza"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-sm text-background/70 leading-relaxed">
              Faculdade de Tecnologia de Tatuí
              <br />
              Centro Paula Souza
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-background transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Rodovia Mário Batista Mori, 971</li>
              <li>Tatuí/SP - CEP 18280-000</li>
              <li>(15) 3205-7782</li>
              <li>f132.contato@fatec.sp.gov.br</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-background/20 text-center text-sm text-background/60">
          <p>
            © {currentYear} Fatec Tatuí - Centro Paula Souza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;


