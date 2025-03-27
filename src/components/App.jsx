import React, { useState } from "react";
import InputArea from "./InputArea";

function App() {

  
  const [items, setItems] = useState([]);

  
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText]
    })

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      onAdd={addItem}
      />
      <div>
        <ul>
          {items.map(todoItem => <li>{todoItem}</li>)} 
        </ul>
      </div>
    </div>
  );
}

export default App;
