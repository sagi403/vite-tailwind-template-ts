import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageCounter = () => {
  const [count, setCount] = useLocalStorage("count", 0);

  const increment = () => {
    setCount(previousCount => previousCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className="btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default LocalStorageCounter;
