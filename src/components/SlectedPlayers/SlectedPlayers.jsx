import React from 'react';
import Selection from '../Selection/Selection';

const SlectedPlayers = ({selected}) => {
    return (
        <div className='text-white max-w-[1200px] mx-auto  grid grid-cols-3'>
            

            {
                selected.map(player=><Selection player={player} key={player.id}></Selection>)
            }
        </div>
    );
};

export default SlectedPlayers;