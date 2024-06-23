
game = {
  gameId: '',
  teamSize: 0, // Number of players in each team
  players: {
    teamA: [], // Array of player names for Team A
    teamB: [] // Array of player names for Team B
  },
  chosenSide: '', // 'A' or 'B'
  toss: {
    winner: '', // 'A' or 'B'
    choice: '' // 'bat' or 'bowl'
  },
  score: {
    teamA: 0, // Score of Team A
    teamB: 0, // Score of Team B
  },
  currentInning: '', // 'A' or 'B' - The team currently playing
  gameState: '', // 'home', 'chooseTeamSize', 'enterPlayerNamesA', 'enterPlayerNamesB', 'chooseSide', 'toss', 'chooseBatBowl', 'play'
}