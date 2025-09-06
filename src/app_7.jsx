import React from "react";

function NumberList() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>Number List</h2>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>   
        ))}
      </ul>
    </div>
  );
}

export default NumberList;