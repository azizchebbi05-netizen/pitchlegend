import Header from "./components/Header";
import Hero from "./components/Hero";
import Players from "./components/Players";
import Services from "./components/services";
import contact from "./components/contact";
import Messages from "./components/Messages";
import Footer from "./components/Footer";
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