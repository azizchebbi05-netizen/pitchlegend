import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function contact() {
  const [name, setName] = useState("");

  const send = async () => {
    if (!name.trim()) return;

    await addDoc(collection(db, "messages"), {
      name,
      createdAt: new Date()
    });

    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact</h2>

      <input
        placeholder="Ton nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={send}>
        Envoyer
      </button>
    </div>
  );
}