function IndianPlayers() {
  const players = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Pant",
    "Hardik",
    "Jadeja",
    "Siraj",
  ];

  const [
    odd1,
    even1,
    odd2,
    even2,
    odd3,
    even3,
    odd4,
    even4,
  ] = players;

  const oddPlayers = [odd1, odd2, odd3, odd4];
  const evenPlayers = [even1, even2, even3, even4];

  const T20players = [
    "Virat",
    "Rohit",
    "Hardik",
    "Surya",
  ];

  const RanjiPlayers = [
    "Pujara",
    "Rahane",
    "Sarfaraz",
    "Jaiswal",
  ];

  const mergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <>
      <h2>Odd Team Players</h2>

      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>

      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players</h2>

      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </>
  );
}

export default IndianPlayers;