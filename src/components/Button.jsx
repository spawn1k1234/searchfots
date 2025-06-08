import React from "react";

export default function Button({ onClick }) {
  return (
    <div className="flexfoot">
      <button className="button load-more" onClick={onClick}>
        Load more
      </button>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Spawn1k . All rights reserved.</p>
      </footer>
    </div>
  );
}
