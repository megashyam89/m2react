import React from "react";

const App = () => {

  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <div>
      <h1>Function Event Handler Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
