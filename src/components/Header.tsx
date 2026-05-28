import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", to: "#topo" },
    { name: "Programação", to: "#programacao" },
    { name: "Edições", to: "#edicoes" },
    { name: "Contato", to: "#contato" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-red-900/30 bg-[#b20000] shadow-md">
      <div className="container mx-auto px-6 py-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#topo"
            onClick={(e) => handleScroll(e, "#topo")}
            className="flex items-center gap-3"
          >
            <img className="w-10 md:w-20" src="logo.svg" alt="WeekTech" />

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white md:text-xl">
                WeekTech
              </span>
              <span className="text-xs text-red-100 md:text-sm">
                Fatec Tatuí
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.to}
                onClick={(e) => handleScroll(e, item.to)}
                className="text-sm font-medium text-red-100 transition-colors hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Abrir Menu"
            className="rounded-lg p-2 text-white hover:bg-red-900/40 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col gap-2 rounded-2xl border border-red-800 bg-[#990000] p-4 shadow-lg md:hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.to}
                onClick={(e) => handleScroll(e, item.to)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-red-100 hover:bg-red-900/40 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;