import { useState } from "react";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "1234") {
      onLogin(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>

      <input
        type="password"
        placeholder="mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Connexion</button>
    </div>
  );
}