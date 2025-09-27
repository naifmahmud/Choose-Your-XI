import React, { use } from 'react';
import Players from '../Player/Players';
import Container from '../Container';

const AvailablePlayers = ({playersData,availableBalace,setAvailableBalance,purchasedPlayers,setPurchasedPlayers}) => {
    const playerData= use(playersData);
    
 return(
    <div className='my-40 grid space-x-0 space-y-5 lg:grid-cols-3'>

        {
            playerData.map(player => <Players availableBalace={availableBalace} setAvailableBalance={setAvailableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} player={player}> </Players>)
        }
    </div>
 )}

export default AvailablePlayers;