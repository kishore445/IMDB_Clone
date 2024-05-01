import React from "react";
import logo from "../Asserts/Movie.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4  bg-black">
        
        <img src={logo} className="w-[80px] hover:scale-110 duration-100"/>
    
      <Link to="/"><h3 className="text-white hover:scale-110 duration-100 p-5">Movies</h3>  </Link>
      <Link to="/Watchlist"><h3 className="text-white hover:scale-110 duration-100 p-5">WatchList</h3></Link>
    </div>
  );
};

export default Navbar