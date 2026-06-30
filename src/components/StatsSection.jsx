import { Reveal } from "../hooks/useReveal.jsx";

export default function StatsSection({ stats }) {
  return (
    <section className="section" id="stats">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">En chiffres</p>
          <h2>Statistiques globales de notre base</h2>
        </Reveal>
        <Reveal className="stats-grid">
          <article className="stat-card">
            <span className="stat-value">{stats.totalGoals.toLocaleString("fr-FR")}</span>
            <span className="stat-label">Buts cumulés</span>
          </article>
          <article className="stat-card">
            <span className="stat-value">{stats.totalAssists.toLocaleString("fr-FR")}</span>
            <span className="stat-label">Passes décisives</span>
          </article>
          <article className="stat-card">
            <span className="stat-value">{stats.totalTitles}</span>
            <span className="stat-label">Titres majeurs</span>
          </article>
          <article className="stat-card">
            <span className="stat-value">{stats.totalClubs}</span>
            <span className="stat-label">Clubs différents</span>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
