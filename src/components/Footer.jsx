export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="logo" href="#top">
          Pitch<span>Legend</span>
        </a>
        <p>© 2026 PitchLegend. Base de données carrières football — projet démo.</p>
        <ul className="footer-links">
          <li>
            <a href="#joueurs">Joueurs</a>
          </li>
          <li>
            <a href="#legends">Légendes</a>
          </li>
          <li>
            <a href="#stats">Stats</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
