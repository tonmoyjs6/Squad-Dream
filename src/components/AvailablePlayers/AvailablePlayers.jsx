import React, { use } from 'react';
import Players from '../Players/Players';

const AvailablePlayers = ({players}) => {
    const usePlayers=use(players)
    
    return (
        <div className='grid grid-cols-3 mt-8'>
            {
                usePlayers.map(player=><Players key={player.id} player={player}></Players>)
            }
        </div>
    );
};

export default AvailablePlayers;