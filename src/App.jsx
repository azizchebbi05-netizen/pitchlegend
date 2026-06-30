import { useState } from "react";
import Login from "./components/Login";
import Messages from "./components/Messages";
import Players from "./components/Players";
export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  if (!isAdmin) {
    return <Login onLogin={setIsAdmin} />;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Messages />
    </div>
  );
}