import { useState } from "react";
import Tours from "./components/Tours";
import data from "./utils/data";

const App = () => {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col w-screen h-screen">
        <h2 className="text-3xl font-bold text-blue-800 border-b-4 mb-2 border-red-400">
          No Tours left
        </h2>
        <button
          onClick={() => setTours(data)}
          className="bg-black text-white h-8 font-bold text-2xl w-[100px] rounded-md mb-40 hover:text-black  hover:bg-gray-200"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
