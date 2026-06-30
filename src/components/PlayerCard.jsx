import { getPlayerAge } from "../data/players.js";

export default function PlayerCard({ player, onSelect }) {
  const age = getPlayerAge(player.birthYear);

  return (
    <article className="player-card reveal visible">
      <div className="player-photo" style={{ background: player.gradient }}>
        <span className="player-flag">{player.flag}</span>
        <span className="player-number">{player.goals}</span>
        <span className="player-number-label">buts</span>
      </div>
      <div className="player-body">
        <span className="player-position">{player.position}</span>
        <h3>{player.name}</h3>
        <p className="player-club">
          {player.currentClub} · {age} ans
        </p>
        <div className="player-mini-stats">
          <span>
            <strong>{player.assists}</strong> passes D.
          </span>
          <span>
            <strong>{player.caps}</strong> sélections
          </span>
          <span>
            <strong>{player.titles}</strong> titres
          </span>
        </div>
        <button className="btn btn-sm btn-full player-btn" onClick={() => onSelect(player.id)}>
          Voir la carrière
        </button>
      </div>
    </article>
  );
}
