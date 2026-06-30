export const PLAYERS = [
  {
    id: "mbappe",
    name: "Kylian Mbappé",
    position: "Attaquant",
    nationality: "France",
    flag: "🇫🇷",
    birthYear: 1998,
    currentClub: "Real Madrid",
    goals: 310,
    assists: 120,
    caps: 88,
    titles: 18,
    legend: true,
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
    trophies: [
      "Coupe du Monde 2018",
      "Ligue des Champions 2024",
      "4× Ligue 1",
      "Coupe du Monde des Clubs 2025",
    ],
    career: [
      { club: "Monaco", period: "2015–2017", role: "Formation & débuts", note: "Champion de France 2017" },
      { club: "Paris SG", period: "2017–2024", role: "Star absolue", note: "Meilleur buteur de l'histoire du club" },
      { club: "Real Madrid", period: "2024–", role: "Nouveau chapitre", note: "LDC 2024 dès la 1re saison" },
    ],
  },
  {
    id: "messi",
    name: "Lionel Messi",
    position: "Attaquant",
    nationality: "Argentine",
    flag: "🇦🇷",
    birthYear: 1987,
    currentClub: "Inter Miami",
    goals: 850,
    assists: 380,
    caps: 190,
    titles: 45,
    legend: true,
    gradient: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
    trophies: [
      "Coupe du Monde 2022",
      "Copa América 2021 & 2024",
      "4× Ligue des Champions",
      "8× Ballon d'Or",
    ],
    career: [
      { club: "Barcelone", period: "2004–2021", role: "Légende du club", note: "672 buts, record absolu" },
      { club: "Paris SG", period: "2021–2023", role: "Transition", note: "Adaptation au PSG" },
      { club: "Inter Miami", period: "2023–", role: "Ambassadeur MLS", note: "MLS Cup 2024" },
    ],
  },
  {
    id: "ronaldo",
    name: "Cristiano Ronaldo",
    position: "Attaquant",
    nationality: "Portugal",
    flag: "🇵🇹",
    birthYear: 1985,
    currentClub: "Al-Nassr",
    goals: 920,
    assists: 260,
    caps: 220,
    titles: 35,
    legend: true,
    gradient: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)",
    trophies: [
      "Euro 2016",
      "Ligue des Nations 2019",
      "5× Ligue des Champions",
      "5× Ballon d'Or",
    ],
    career: [
      { club: "Sporting CP", period: "2002–2003", role: "Débuts", note: "Premier club professionnel" },
      { club: "Manchester United", period: "2003–2009 / 2021–2022", role: "Éclosion puis retour", note: "Premier Ballon d'Or 2008" },
      { club: "Real Madrid", period: "2009–2018", role: "Apogée", note: "450 buts, record du club" },
      { club: "Juventus", period: "2018–2021", role: "Série A", note: "2 titres de champion" },
      { club: "Al-Nassr", period: "2023–", role: "Arabie Saoudite", note: "Capitaine et buteur" },
    ],
  },
  {
    id: "haaland",
    name: "Erling Haaland",
    position: "Attaquant",
    nationality: "Norvège",
    flag: "🇳🇴",
    birthYear: 2000,
    currentClub: "Manchester City",
    goals: 280,
    assists: 55,
    caps: 40,
    titles: 12,
    legend: false,
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #6366f1 100%)",
    trophies: [
      "Ligue des Champions 2023",
      "Premier League 2023, 2024",
      "Treble 2023",
      "Golden Boot PL 2023",
    ],
    career: [
      { club: "Molde", period: "2017–2019", role: "Débuts", note: "20 buts en 50 matchs" },
      { club: "Salzburg / Dortmund", period: "2019–2022", role: "Révélation", note: "Machine à buts en Bundesliga" },
      { club: "Manchester City", period: "2022–", role: "Butteur de référence", note: "36 buts en PL 2023" },
    ],
  },
  {
    id: "benzema",
    name: "Karim Benzema",
    position: "Attaquant",
    nationality: "France",
    flag: "🇫🇷",
    birthYear: 1987,
    currentClub: "Al-Ittihad",
    goals: 450,
    assists: 180,
    caps: 97,
    titles: 28,
    legend: true,
    gradient: "linear-gradient(135deg, #713f12 0%, #ca8a04 100%)",
    trophies: [
      "Ballon d'Or 2022",
      "5× Ligue des Champions",
      "4× Ligue 1",
      "Liga 2020, 2022",
    ],
    career: [
      { club: "Lyon", period: "2004–2009", role: "Formation", note: "3 titres de Ligue 1" },
      { club: "Real Madrid", period: "2009–2023", role: "9 du club", note: "354 buts, Ballon d'Or 2022" },
      { club: "Al-Ittihad", period: "2023–", role: "Fin de carrière", note: "Arabie Saoudite" },
    ],
  },
  {
    id: "zidane",
    name: "Zinédine Zidane",
    position: "Milieu",
    nationality: "France",
    flag: "🇫🇷",
    birthYear: 1972,
    currentClub: "Retraité",
    goals: 125,
    assists: 95,
    caps: 108,
    titles: 15,
    legend: true,
    gradient: "linear-gradient(135deg, #312e81 0%, #4338ca 100%)",
    trophies: [
      "Coupe du Monde 1998",
      "Euro 2000",
      "Ligue des Champions 1998, 2002",
      "Ballon d'Or 1998",
    ],
    career: [
      { club: "Cannes / Bordeaux", period: "1989–1996", role: "Formation", note: "Révélation en Ligue 1" },
      { club: "Juventus", period: "1996–2001", role: "Maestro", note: "2 finales de C1" },
      { club: "Real Madrid", period: "2001–2006", role: "Galactique", note: "Volée en finale C1 2002" },
    ],
  },
  {
    id: "henry",
    name: "Thierry Henry",
    position: "Attaquant",
    nationality: "France",
    flag: "🇫🇷",
    birthYear: 1977,
    currentClub: "Retraité",
    goals: 411,
    assists: 150,
    caps: 123,
    titles: 18,
    legend: true,
    gradient: "linear-gradient(135deg, #831843 0%, #db2777 100%)",
    trophies: [
      "Coupe du Monde 1998",
      "Euro 2000",
      "Ligue des Champions 2006",
      "4× Premier League",
    ],
    career: [
      { club: "Monaco", period: "1994–1999", role: "Débuts", note: "Champion 1997" },
      { club: "Arsenal", period: "1999–2007", role: "Légende", note: "228 buts, Invincibles 2004" },
      { club: "Barcelone", period: "2007–2010", role: "Sextuple 2009", note: "LDC 2009" },
    ],
  },
  {
    id: "modric",
    name: "Luka Modrić",
    position: "Milieu",
    nationality: "Croatie",
    flag: "🇭🇷",
    birthYear: 1985,
    currentClub: "Real Madrid",
    goals: 85,
    assists: 130,
    caps: 190,
    titles: 28,
    legend: true,
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)",
    trophies: [
      "Ballon d'Or 2018",
      "6× Ligue des Champions",
      "Coupe du Monde — Finaliste 2018",
      "3× La Liga",
    ],
    career: [
      { club: "Dinamo Zagreb", period: "2003–2008", role: "Formation", note: "Révélation croate" },
      { club: "Tottenham", period: "2008–2012", role: "Premier League", note: "Joueur clé des Spurs" },
      { club: "Real Madrid", period: "2012–", role: "Maestro", note: "Ballon d'Or 2018 à 33 ans" },
    ],
  },
  {
    id: "neuer",
    name: "Manuel Neuer",
    position: "Gardien",
    nationality: "Allemagne",
    flag: "🇩🇪",
    birthYear: 1986,
    currentClub: "Bayern Munich",
    goals: 0,
    assists: 2,
    caps: 124,
    titles: 32,
    legend: true,
    gradient: "linear-gradient(135deg, #374151 0%, #6b7280 100%)",
    trophies: [
      "Coupe du Monde 2014",
      "Ligue des Champions 2013, 2020",
      "11× Bundesliga",
      "The Best 2020",
    ],
    career: [
      { club: "Schalke 04", period: "2006–2011", role: "Débuts", note: "Demi-finale C1 2011" },
      { club: "Bayern Munich", period: "2011–", role: "Sweeper-keeper", note: "Révolutionne le poste" },
    ],
  },
  {
    id: "salah",
    name: "Mohamed Salah",
    position: "Attaquant",
    nationality: "Égypte",
    flag: "🇪🇬",
    birthYear: 1992,
    currentClub: "Liverpool",
    goals: 340,
    assists: 145,
    caps: 110,
    titles: 14,
    legend: false,
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)",
    trophies: [
      "Ligue des Champions 2019",
      "Premier League 2020",
      "3× Golden Boot PL",
      "CAN 2024 — Finaliste",
    ],
    career: [
      { club: "Basel / Chelsea / Roma", period: "2012–2017", role: "Apprentissage", note: "Progression en Serie A" },
      { club: "Liverpool", period: "2017–", role: "Star", note: "Meilleur buteur de l'histoire du club" },
    ],
  },
  {
    id: "van-dijk",
    name: "Virgil van Dijk",
    position: "Défenseur",
    nationality: "Pays-Bas",
    flag: "🇳🇱",
    birthYear: 1991,
    currentClub: "Liverpool",
    goals: 45,
    assists: 15,
    caps: 75,
    titles: 10,
    legend: false,
    gradient: "linear-gradient(135deg, #134e4a 0%, #0d9488 100%)",
    trophies: [
      "Ligue des Champions 2019",
      "Premier League 2020",
      "UEFA Nations League — Finaliste",
    ],
    career: [
      { club: "Celtic / Southampton", period: "2013–2018", role: "Montée en puissance", note: "Record transfert défenseur" },
      { club: "Liverpool", period: "2018–", role: "Capitaine", note: "Pilier de la défense" },
    ],
  },
  {
    id: "de-bruyne",
    name: "Kevin De Bruyne",
    position: "Milieu",
    nationality: "Belgique",
    flag: "🇧🇪",
    birthYear: 1991,
    currentClub: "Manchester City",
    goals: 130,
    assists: 280,
    caps: 110,
    titles: 18,
    legend: false,
    gradient: "linear-gradient(135deg, #581c87 0%, #9333ea 100%)",
    trophies: [
      "Ligue des Champions 2023",
      "6× Premier League",
      "Treble 2023",
      "Joueur de l'année PFA 2021",
    ],
    career: [
      { club: "Genk / Chelsea / Wolfsburg", period: "2008–2015", role: "Formation", note: "Révélation en Bundesliga" },
      { club: "Manchester City", period: "2015–", role: "Créateur", note: "Meilleur passeur de l'ère Guardiola" },
    ],
  },
];

export const NATIONALITIES = [...new Set(PLAYERS.map((p) => p.nationality))].sort();

export function getGlobalStats() {
  const totalGoals = PLAYERS.reduce((sum, p) => sum + p.goals, 0);
  const totalAssists = PLAYERS.reduce((sum, p) => sum + p.assists, 0);
  const totalTitles = PLAYERS.reduce((sum, p) => sum + p.titles, 0);
  const allClubs = new Set();
  PLAYERS.forEach((p) =>
    p.career.forEach((c) => allClubs.add(c.club.split(" / ")[0].split(" · ")[0]))
  );

  return {
    playerCount: PLAYERS.length,
    totalGoals,
    totalAssists,
    totalTitles,
    totalClubs: `${allClubs.size}+`,
  };
}

export function filterPlayers({ query, position, nationality }) {
  const normalizedQuery = query.trim().toLowerCase();

  return PLAYERS.filter((player) => {
    const matchQuery =
      !normalizedQuery ||
      player.name.toLowerCase().includes(normalizedQuery) ||
      player.currentClub.toLowerCase().includes(normalizedQuery) ||
      player.nationality.toLowerCase().includes(normalizedQuery);
    const matchPosition = !position || player.position === position;
    const matchNationality = !nationality || player.nationality === nationality;
    return matchQuery && matchPosition && matchNationality;
  });
}

export function getPlayerAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}
