import React from "react";

const App = () => {
  const handleMouseEnter = () => {
    console.log("Mouse Entered!");
  };

  return (
    <div>
      <h1>onMouseEnter Event Example</h1>
      <div 
        onMouseEnter={handleMouseEnter} 
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightblue",
          textAlign: "center",
          lineHeight: "100px",
          border: "2px solid blue",
          cursor: "pointer"
        }}
      >
        Hover over me
      </div>
    </div>
  );
};

export default App;
