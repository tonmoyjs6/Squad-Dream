import React, { use } from 'react';
import Players from '../Players/Players';

const AvailablePlayers = ({players,setSelected,selected,handleCoin,availableCoin}) => {
    const usePlayers=use(players)
    
    return (
        <div className='grid grid-cols-3 mt-8 max-w-[1200px] mx-auto'>
            {
                usePlayers.map(player=><Players key={player.id} player={player} selected={selected} setSelected={setSelected} availableCoin={availableCoin} handleCoin={handleCoin} ></Players>)
            }
        </div>
    );
};

export default AvailablePlayers;