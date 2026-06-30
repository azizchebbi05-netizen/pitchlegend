import { useEffect, useRef } from "react";
import { getPlayerAge } from "../data/players.js";

export default function PlayerModal({ player, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (player) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [player]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  if (!player) {
    return (
      <dialog className="player-modal" ref={dialogRef} aria-labelledby="modal-name">
        <div className="modal-inner"></div>
      </dialog>
    );
  }

  const age = getPlayerAge(player.birthYear);

  return (
    <dialog
      className="player-modal"
      ref={dialogRef}
      aria-labelledby="modal-name"
      onClick={handleBackdropClick}
    >
      <div className="modal-inner">
        <button className="modal-close" aria-label="Fermer" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <div className="modal-photo" style={{ background: player.gradient }}>
            {player.flag}
          </div>
          <div>
            <p className="eyebrow">
              {player.position} · {player.nationality}
            </p>
            <h2 id="modal-name">{player.name}</h2>
            <p>
              {player.currentClub} · {age} ans · {player.caps} sélections
            </p>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-stats">
            <div className="modal-stat">
              <strong>{player.goals}</strong>
              <span>Buts</span>
            </div>
            <div className="modal-stat">
              <strong>{player.assists}</strong>
              <span>Passes D.</span>
            </div>
            <div className="modal-stat">
              <strong>{player.caps}</strong>
              <span>Sélections</span>
            </div>
            <div className="modal-stat">
              <strong>{player.titles}</strong>
              <span>Titres</span>
            </div>
          </div>
          <div className="modal-section">
            <h3>Palmarès</h3>
            <ul className="trophy-list">
              {player.trophies.map((trophy) => (
                <li key={trophy}>{trophy}</li>
              ))}
            </ul>
          </div>
          <div className="modal-section">
            <h3>Parcours club par club</h3>
            <div className="career-timeline">
              {player.career.map((step, index) => (
                <div className="timeline-item" key={`${step.club}-${step.period}`}>
                  <div className="timeline-marker">{index + 1}</div>
                  <div className="timeline-content">
                    <div className="timeline-head">
                      <strong>{step.club}</strong>
                      <span>{step.period}</span>
                    </div>
                    <p className="timeline-role">{step.role}</p>
                    <p className="timeline-note">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
