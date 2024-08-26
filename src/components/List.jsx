import React from "react";
const todos = [
  { id: 1, text: "Check the condition of the Car" },
  { id: 2, text: "Deliver the Car for Service" },
  { id: 3, text: "Report the car condtions" },
];
const List = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todos.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
