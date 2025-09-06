import React from "react";

function NumberList() {
  // Each number object has a unique id
  const numbers = [
    { id: 101, value: 1 },
    { id: 102, value: 2 },
    { id: 103, value: 3 },
    { id: 104, value: 4 },
    { id: 105, value: 5 }
  ];

  return (
    <div>
      <h2>Number List with Keys</h2>
      <ul>
        {numbers.map(num => (
          <li key={num.id}>{num.value}</li>   
        ))}
      </ul>
    </div>
  );
}

export default NumberList;