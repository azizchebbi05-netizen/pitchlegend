import { useMemo, useState } from "react";
import { NATIONALITIES, filterPlayers } from "../data/players.js";
import { Reveal } from "../hooks/useReveal.jsx";
import PlayerCard from "./PlayerCard.jsx";

export default function PlayersSection({ onSelectPlayer }) {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState("");
  const [nationality, setNationality] = useState("");

  const filteredPlayers = useMemo(
    () => filterPlayers({ query, position, nationality }),
    [query, position, nationality]
  );

  return (
    <section className="section" id="joueurs">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Annuaire</p>
          <h2>Tous les joueurs</h2>
        </Reveal>

        <Reveal className="filters">
          <div className="search-wrap">
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un joueur…"
              aria-label="Rechercher un joueur"
            />
          </div>
          <select
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            aria-label="Filtrer par poste"
          >
            <option value="">Tous les postes</option>
            <option value="Attaquant">Attaquant</option>
            <option value="Milieu">Milieu</option>
            <option value="Défenseur">Défenseur</option>
            <option value="Gardien">Gardien</option>
          </select>
          <select
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
            aria-label="Filtrer par nationalité"
          >
            <option value="">Toutes les nationalités</option>
            {NATIONALITIES.map((nat) => (
              <option key={nat} value={nat}>
                {nat}
              </option>
            ))}
          </select>
        </Reveal>

        <div className="players-grid">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} onSelect={onSelectPlayer} />
          ))}
        </div>
        {filteredPlayers.length === 0 && (
          <p className="empty-state">Aucun joueur ne correspond à votre recherche.</p>
        )}
      </div>
    </section>
  );
}
