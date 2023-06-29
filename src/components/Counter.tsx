import { useState } from "react";

type Props = {
  name: string;
  start: number;
};

const Counter = ({ name, start }: Props) => {
  const [count, setCount] = useState(start);

  return (
    <>
      <h1>{name}</h1>
      <p>You clicked {count} times</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
};

export default Counter;
