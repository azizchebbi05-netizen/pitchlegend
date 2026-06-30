import { useEffect, useState } from "react";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>⚽ Players List</h2>

      {players.map((p) => (
        <div key={p.id} style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>{p.name}</h3>
          <p>{p.email}</p>
        </div>
      ))}
    </div>
  );
}