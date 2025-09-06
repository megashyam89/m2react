import React from "react";

const App = () => {
  const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>Passing Arguments in Events Example</h1>
      <button onClick={() => greetUser("John")}>
        Greet John
      </button>
    </div>
  );
};

export default App;
