import React from "react";

const App = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>onChange Event Example</h1>
      <input 
        type="text" 
        placeholder="Type something..." 
        onChange={handleChange} 
      />
    </div>
  );
};

export default App;