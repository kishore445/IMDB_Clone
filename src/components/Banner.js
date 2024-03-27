import React from "react";

const Banner = () => {
  return (
    <div className="h-[20vh] md:h-[45vh] bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)`,
      }}
    >
      <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 w-full text-center text-white">Jhon Wick - 4</div>
    </div>
  );
};

export default Banner;