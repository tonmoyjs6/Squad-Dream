import React from "react";

import currency from "../../assets/Currency.png"

const NavBar = ({availableCoin}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Squad Dream</a>
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search"
          className="input w-24 md:w-auto"
        />
        <img src={currency} alt="" srcset="" />
           
        <p>Coin
       
         {availableCoin}</p>
          
      
      </div>
    </div>
  );
};

export default NavBar;
