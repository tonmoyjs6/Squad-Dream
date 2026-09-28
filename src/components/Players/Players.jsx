import React from "react";
import { toast } from "react-toastify";

const Players = ({ player, setSelected, selected }) => {

  const handleSelcted = (selPlayer) => {
    const fileterd = selected.filter((sepl) => sepl.id === selPlayer.id);

    // console.log(fileterd.length, "filter");

    if (fileterd.length > 0) {
      toast("Player alreadyselected");

      return;
    }
    // quota
    // GK 1
    // DEF 4
    // MID 4
    // FWD 2

    const filterQuota=selected.filter(pl=>pl.position===selPlayer.position).length
    console.log(filterQuota,"quota","position:",selPlayer.position)

    if(selPlayer.position=="GK"){
      if(filterQuota>=1){
        toast("full of quota")
        return
      }
    }
    else if(selPlayer.position=="DEF"){
       if(filterQuota>=4){
        toast("full of quota")
        return
      }
    }
    else if(selPlayer.position=="MID"){
       if(filterQuota>=4){
        toast("full of quota")
        return
      }
    }
      else if(selPlayer.position=="FWD"){
       if(filterQuota>=2){
        toast("full of quota")
        return
      }   
  };
   setSelected([...selected, selPlayer]);
}
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          className="w-[250px] h-[250px]"
          src={player.image}
          alt={player.name}
        />
      </figure>
      <div className="card-body ml-20">
        <h2 className="card-title">{player.name}</h2>
        <p>position:{player.position}</p>
        <p>Price:{player.price}$</p>
        <div className="card-actions justify-end mr-40 ">
          <button
            onClick={() => handleSelcted(player)}
            className="btn btn-primary"
          >
            Choose Player{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
