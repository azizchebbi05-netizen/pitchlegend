import { Reveal } from "../hooks/useReveal.jsx";

export default function AboutSection() {
  return (
    <section className="section section-alt" id="apropos">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow">Notre mission</p>
          <h2>Comprendre le parcours derrière chaque légende</h2>
          <p>
            PitchLegend rassemble les données essentielles de carrière : clubs,
            saisons, statistiques et palmarès — pour les fans, les analystes et
            les passionnés de football.
          </p>
          <p>
            Chaque fiche détaille le parcours club par club, les saisons marquantes
            et les trophées remportés au fil des années.
          </p>
          <ul className="about-list">
            <li>Parcours club par club avec saisons</li>
            <li>Statistiques : buts, passes, sélections</li>
            <li>Palmarès et moments clés de carrière</li>
          </ul>
        </Reveal>
        <Reveal className="about-visual">
          <div className="about-card">
            <span className="about-badge">Comment lire une fiche</span>
            <h3>Structure d'une carrière</h3>
            <ol>
              <li>
                <strong>Formation</strong> — Centre de formation et débuts pro
              </li>
              <li>
                <strong>Apogée</strong> — Clubs majeurs et meilleures saisons
              </li>
              <li>
                <strong>Consécration</strong> — Titres nationaux et européens
              </li>
              <li>
                <strong>Héritage</strong> — Records et impact sur le jeu
              </li>
            </ol>
            <p className="about-note">
              Cliquez sur un joueur pour voir sa timeline complète et ses stats détaillées.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
