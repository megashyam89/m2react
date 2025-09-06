import React from "react";

const App = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>Button Click Alert Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;