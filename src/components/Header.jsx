import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header" id="top">
      <nav className="nav container">
        <a className="logo" href="#top" onClick={closeMenu}>
          Pitch<span>Legend</span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <a href="#joueurs" onClick={closeMenu}>
              Joueurs
            </a>
          </li>
          <li>
            <a href="#legends" onClick={closeMenu}>
              Légendes
            </a>
          </li>
          <li>
            <a href="#stats" onClick={closeMenu}>
              Statistiques
            </a>
          </li>
          <li>
            <a href="#apropos" onClick={closeMenu}>
              À propos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
