import React from "react";

const Selection = ({ player }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-[250px]"
            src={player.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{player.name}</h2>
          <h2>{player.position}</h2>
         <h2>{player.price}</h2>

          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
