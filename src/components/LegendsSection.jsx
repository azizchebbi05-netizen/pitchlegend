import { PLAYERS } from "../data/players.js";
import { Reveal } from "../hooks/useReveal.jsx";
import LegendCard from "./LegendCard.jsx";

export default function LegendsSection({ onSelectPlayer }) {
  const legends = PLAYERS.filter((player) => player.legend);

  return (
    <section className="section section-alt" id="legends">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Hall of Fame</p>
          <h2>Les légendes du ballon rond</h2>
        </Reveal>
        <div className="legends-grid">
          {legends.map((player) => (
            <LegendCard key={player.id} player={player} onSelect={onSelectPlayer} />
          ))}
        </div>
      </div>
    </section>
  );
}
