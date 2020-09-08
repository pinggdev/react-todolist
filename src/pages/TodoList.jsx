import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!" },
    { text: "Learning React Hooks!" },
    { text: "Learning styling in React!" }
  ]);

  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
