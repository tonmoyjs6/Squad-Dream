import React from 'react';
import Selection from '../Selection/Selection';

const SlectedPlayers = ({selected,availableCoin,setCoin,setSelected}) => {
    return (
        <div className='text-white max-w-[1200px] mx-auto  grid grid-cols-3'>
            

            {
                selected.map(player=><Selection availableCoin={availableCoin} setCoin={setCoin} player={player} key={player.id} selected={selected} setSelected={setSelected}></Selection>)
            }
        </div>
    );
};

export default SlectedPlayers;