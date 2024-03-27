import React from "react";
import logo from "../Asserts/Movie.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4 border">
        
        <img src={logo} className="w-[80px]"/>
    
      <Link to="/"><h3 className="text-blue-400">Movies</h3>  </Link>
      <Link to="/Watchlist"><h3 className="text-blue-400">WatchList</h3></Link>
    </div>
  );
};

export default Navbar