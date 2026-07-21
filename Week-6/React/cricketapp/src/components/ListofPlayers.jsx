const players = [
  { name: "Virat Kohli", score: 95 },
  { name: "Rohit Sharma", score: 88 },
  { name: "Shubman Gill", score: 76 },
  { name: "KL Rahul", score: 68 },
  { name: "Hardik Pandya", score: 81 },
  { name: "Ravindra Jadeja", score: 65 },
  { name: "Rishabh Pant", score: 91 },
  { name: "Suryakumar Yadav", score: 72 },
  { name: "Mohammed Siraj", score: 40 },
  { name: "Jasprit Bumrah", score: 55 },
  { name: "Kuldeep Yadav", score: 62 },
];

function ListofPlayers() {
  const below70 = players.filter((player) => player.score < 70);

  return (
    <>
      <h2>List of Players</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Players with Score Below 70</h2>

      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListofPlayers;