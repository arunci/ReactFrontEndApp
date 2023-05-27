const team = {
  _players: [
    { firstName: "Giannis", lastName: "Antetokounmpo", age: 28 },
    { firstName: "Kevin", lastName: "Durant", age: 34 },
    { firstName: "Stephen", lastName: "Curry", age: 35 },
  ],
  _games: [
    { opponent: "Boston Celtics", teamPoints: 98, opponentPoints: 102 },
    { opponent: "L.A. Lakers", teamPoints: 89, opponentPoints: 80 },
    { opponent: "Dallas Mavericks", teamPoints: 116, opponentPoints: 109 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    this._players.push({
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    });
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    this._games.push({
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    });
  },
};

team.addPlayer("Luka", "Doncic", 24);
team.addGame("Titans", 100, 98);

console.log(team.players);
console.log(team.games);
