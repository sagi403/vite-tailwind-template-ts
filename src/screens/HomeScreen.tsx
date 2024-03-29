import Counter from "../components/Counter";
import LocalStorageCounter from "../components/LocalStorageCounter";

const HomeScreen = () => {
  const title = import.meta.env.VITE_TEST;

  return (
    <div className="text-center text-5xl">
      <h1 className="text-red-800 bg-blue-800">{title}</h1>
      <Counter name="Counter" start={5} />
      <LocalStorageCounter />
    </div>
  );
};

export default HomeScreen;
