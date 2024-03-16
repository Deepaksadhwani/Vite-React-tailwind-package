import Card from "./Card";

const Tours = (props) => {
  const { tours, removeTour } = props;
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-[3rem] m-[6vh] border-[7px] py-[1vh] px-[5vw] border-dashed border-blue-700">
        Plan with Deepak
      </h1>
      <div className="flex justify-center items-center flex-wrap max-w-[1300px] mx-auto ">
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;
