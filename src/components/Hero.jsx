import { Reveal } from "../hooks/useReveal.jsx";

export default function Hero({ playerCount }) {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <Reveal>
          <p className="eyebrow">Football · Carrières · Stats</p>
        </Reveal>
        <Reveal>
          <h1 className="hero-title">
            Les parcours qui ont
            <em>marqué l'histoire</em>
          </h1>
        </Reveal>
        <Reveal>
          <p className="hero-text">
            Explorez les carrières des plus grands joueurs : clubs, saisons, buts,
            trophées et moments clés — tout en un seul endroit.
          </p>
        </Reveal>
        <Reveal>
          <div className="hero-actions">
            <a href="#joueurs" className="btn">
              Explorer les joueurs
            </a>
            <a href="#legends" className="btn btn-outline">
              Voir les légendes
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="hero-stats">
            <div>
              <strong>{playerCount}</strong>
              <span>Joueurs référencés</span>
            </div>
            <div>
              <strong>8</strong>
              <span>Nationalités</span>
            </div>
            <div>
              <strong>150+</strong>
              <span>Saisons de carrière</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
