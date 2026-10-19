"use client";
import { useState } from "react";
import { MovieCard } from "./movie-card";
export function Chat() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<any>(null);
  async function send() {
    const response = await fetch("/api/copilotkit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    setResult(await response.json());
  }
  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={send}>Envoyer</button>
      {result && (
        <>
          <p>{result.text}</p>
          {result.movies.map((m: any) => (
            <MovieCard key={m.id} title={m.title} year={m.year} />
          ))}
        </>
      )}
    </div>
  );
}
