import { useState } from "react";

const Card = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : info.substring(0, 200) + "...";

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="w-[400px] m-4 p-4 flex [height:max-content] flex-col rounded-md items-center shadow-2xl flex-wrap">
      <img src={image} alt="Image" className="h-[380px] object-cover" />
      <div className="flex flex-col w-full">
        <h4 className="text-2xl text-green-800 font-semibold self">₹{price}</h4>
        <h4 className="uppercase text-2xl font-semi leading-10 -tracking-wider text-cyan-600">
          {name}
        </h4>
      </div>
      <div>
        <div className="font-sans">
          {description}
          <span
            onClick={readMoreHandler}
            className="text-blue-400 font-semibold"
          >
            {readMore ? "show less" : "read more"}
          </span>
        </div>
      </div>
      <button
        onClick={() => removeTour(id)}
        className="text-white bg-gradient-to-br from-blue-500 to-purple-900 opacity-60 h-9 w-44 rounded-lg font-bold border border-black hover:text-black hover:font-semibold hover:bg-gradient-to-l hover:from-orange-600 hover:to-yellow-600 hover:transition-all hover:duration-200"
      >
        Not Interested
      </button>
    </div>
  );
};

export default Card;
