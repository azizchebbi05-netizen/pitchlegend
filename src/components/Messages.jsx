import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });

    return () => unsub();
  }, []);

  const removeMessage = async (id) => {
    await deleteDoc(doc(db, "messages", id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📨 Admin Messages</h2>

      {messages.map((m) => (
        <div key={m.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>{m.name}</strong></p>

          <button onClick={() => removeMessage(m.id)}>
            ❌ Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}