import React, { useState } from "react";
import useCounter from "./useCounter";
import useCount from "./useCount";

const Increament = () => {
    const [num,inc,dec] = useCount();
  const [count, setCount] = useState(0);
  let incNumber=2;
  const [isLoading,result,message,] = useCounter(count,incNumber);
  const handleClick = () => {
    setCount(result);
    console.log(isLoading,result,message);
  };
if(isLoading) return <p>Loading ...</p>
  return (
    <div>
        {message}
      <p>{result}</p>
      <button onClick={handleClick}>Increament</button>

      <p>{num}</p>
      <button onClick={inc}>Increament</button>
      <button onClick={dec}>decreament</button>
    </div>
  );
};

export default Increament;
