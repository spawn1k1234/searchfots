import React, { useState } from "react";

export default function Searchbar({ onSubmit, mode, setMode }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input.trim());
    }
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={`Search ${mode === "gif" ? "GIFs" : "images"}...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div className="search-mode-buttons">
        <button
          className={`mode-button ${mode === "photo" ? "active" : ""}`}
          onClick={() => setMode("photo")}
        >
          Pictures
        </button>
        <button
          className={`mode-button ${mode === "gif" ? "active" : ""}`}
          onClick={() => setMode("gif")}
        >
          GIF-ки
        </button>
      </div>
    </header>
  );
}
