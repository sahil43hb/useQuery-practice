import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const UpdateTodos = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const createTodo = (text) => {
    return () =>
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "post",
        body: JSON.stringify({
          title: text,
          completed: false,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => res.json());
  };

  const addTodoMutate = useMutation(createTodo(text), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      console.log('Create');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutate.mutate(text);
    setText("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={addTodoMutate.isLoading}>Add todo</button>
      </form>
    </div>
  );
};

export default UpdateTodos;
