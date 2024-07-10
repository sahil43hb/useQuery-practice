import React, { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import UpdateTodos from "./UpdateTodos";
import Add from "./Add";
const ShowTodos = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
const func = useCallback(()=>{
},[])
//  const calculation = useMemo(()=>expensiveCalculation(count),[count]);
//  const calculation = expensiveCalculation(count);
 const incr = () => {
    console.log('incr');
    setCount((pre) => pre + 1);
    
  };
  const addTodo = () => {
    console.log('todo');
    setTodo((pre) => [...pre, "New Todo"]);
  };
  const { isLoading, error, data } = useQuery("todos", () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
      response.json()
    )
  );

  if (isLoading) return <p>Loading .....</p>;
  if (error) return <p>Error in fetch {error.message}</p>;
  return (
    <>
    <Add func={func}  />
      <span>{count}</span>
      <button onClick={incr}>Add count</button>
      {todo && todo.map((data) => (
        <>
        <span>{data}</span><br/></>
      ))}
      <button onClick={addTodo}>Add Todo</button>
      {/* {calculation} */}
      <UpdateTodos />
      <ul>
        {data && data.map((todo, index) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
  
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default ShowTodos;
