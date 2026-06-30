export default function LegendCard({ player, onSelect }) {
  return (
    <article className="legend-card reveal visible">
      <div className="legend-photo" style={{ background: player.gradient }}></div>
      <div className="legend-body">
        <span className="legend-flag">
          {player.flag} {player.nationality}
        </span>
        <h3>{player.name}</h3>
        <p>
          {player.position} · {player.career.length} clubs · {player.titles} titres
        </p>
        <button className="btn btn-sm player-btn" onClick={() => onSelect(player.id)}>
          Parcours complet
        </button>
      </div>
    </article>
  );
}
