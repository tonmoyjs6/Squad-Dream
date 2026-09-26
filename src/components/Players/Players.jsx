import React from "react";

const Players = ({ player }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          className="w-[250px] h-[250px]"
          src={player.image}
          alt={player.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{player.name}</h2>
        <p>position:{player.position}</p>
        <p>Price:{player.price}$</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Choose Player </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
