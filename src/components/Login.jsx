import { useState } from "react";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Admin Login</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => onLogin(password === "1234")}>
        Login
      </button>
    </div>
  );
}