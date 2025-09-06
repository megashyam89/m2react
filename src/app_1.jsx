import React from "react";

const App = () => {
  return (
    <div>
      <h1>Inline Event Handler Example</h1>
      <button onClick={() => console.log("Clicked!")}>
        Click Me
      </button>
    </div>
  );
};

export default App;
