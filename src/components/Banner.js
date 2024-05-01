import React from "react";
import axios from "axios";

const Banner = () => {
  return (
    <div className="h-[20vh] md:h-[45vh] bg-center bg-no-repeat flex items-end"
      style={{
        //  backgroundImage: `https://api.themoviedb.org/3/account/21229429/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/cnQI1M057kW0MHTmkQY4VeT6eCe.jpg&quot)`,
      }}
    >
      <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 w-full text-center text-white text-gray-50">Boy kills World</div>
    </div>
  );
};

export default Banner;
