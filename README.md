# PitchLegend — Carrières des joueurs de football

Site interactif React pour explorer les parcours, statistiques et palmarès des plus grands joueurs de football.

## Fonctionnalités

- **Annuaire de 12 joueurs** — Mbappé, Messi, Ronaldo, Haaland, Benzema, Zidane, Henry, Modrić, Neuer, Salah, van Dijk, De Bruyne
- **Recherche & filtres** — par nom, poste (Attaquant, Milieu, Défenseur, Gardien) et nationalité
- **Fiches détaillées** — modal avec stats, palmarès et timeline club par club
- **Hall of Fame** — section dédiée aux légendes
- **Statistiques globales** — buts, passes, titres cumulés

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre l'URL affichée dans le terminal (généralement `http://localhost:5173`).

## Build production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     # Composants React (Header, Hero, PlayerCard, etc.)
  data/           # Données des joueurs et utilitaires
  hooks/          # Hook d'animation reveal
  App.jsx         # Composant racine
  main.jsx        # Point d'entrée
  index.css       # Styles globaux
```

## Personnalisation

- Ajoute de nouveaux joueurs dans `src/data/players.js`
- Modifie les couleurs dans `:root` de `src/index.css` (thème vert terrain)
- Remplace **PitchLegend** par le nom de ton projet

## Stack

React · Vite · CSS
