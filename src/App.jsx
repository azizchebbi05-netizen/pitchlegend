import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Players from "./components/Players";
import Services from "./components/services";
import Contact from "./components/contact";
import Messages from "./components/Messages";
import Footer from "./components/Footer";
import Login from "./components/Login";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  if (!isAdmin) {
    return <Login onLogin={setIsAdmin} />;
  }

  return (
    <div>
      <Header />
      <Hero />
      <Players />
      <Services />
      <Contact />
      <Messages />
      <Footer />
    </div>
  );
}