import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>Simulation</h1>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <div style={{ marginTop: "20px" }}>
        {page === "home" && <h2>Welcome to the Home Page 🏠</h2>}
        {page === "about" && <h2>About Us: This is the About Page ℹ️</h2>}
      </div>
    </div>
  );
}

export default App;