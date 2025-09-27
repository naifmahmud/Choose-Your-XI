import React from 'react';
import Container from '../Container';

import PurchasedPlayers from './PurchasedPlayers';

const SelectedPlayers = ({purchasedPlayers,removedPlayer}) => {
    // console.log(purchasedPlayers);
    return (
        <div className='my-20 space-y-7'>
            
            {
                purchasedPlayers.map(playerDetails=> <PurchasedPlayers playerDetails={playerDetails} removedPlayer={removedPlayer}></PurchasedPlayers>)
            }
            
        </div>
        
    );
    
};

export default SelectedPlayers;