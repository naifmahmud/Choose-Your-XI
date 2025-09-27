import React, { useState } from 'react';
import manIcon from '../../assets/male-user.png';
import flag from '../../assets/red-flag.png';
import Container from '../Container';
import { toast } from 'react-toastify';

const Players = ({player,availableBalace,setAvailableBalance,purchasedPlayers,setPurchasedPlayers}) => {

  const [isSelected,setIsSelected]=useState(false);

    return (
            <div className='mx-auto'> 
                <Container>
                <div className="card bg-base-100 w-96 shadow-sm">
              <figure className='w-[300px] h-52 mx-auto rounded-xl'>
                <img src={player['player-image']} alt="Player"/>
              </figure>
              <div className="card-body px-10">
                <div className='flex gap-5 my-1.5'>
                <img src={manIcon} alt="" />
                <h2 className="card-title">{player['player-name']}</h2>
                </div>
                <div className='cardBody mb-4'>
                    <div className='flex gap-4'>
                        <img src={flag} alt="" />
                        <p className='text-gray-500 font-semibold'>{player['player-country']}</p>
                    </div>
                    <h6 className='rounded-[8px] py-2 px-2.5 bg-gray-200'>{player['playing-role']}</h6>
                </div>
                <div className='cardBody gap-20 '> 
                    <p className='text-start'>{player['bating-style']}</p>
                    <p className='text-end'>{player['bowling-style']}</p>
                </div>
                <div className="cardBody">
                    <p>Price: $ <span className='font-bold'>{player.price}</span></p>
                  <button disabled={isSelected} onClick={()=>{
                    
                    if(availableBalace<player.price){
                      toast("NOt enough money");
                      return
                    }
                    setIsSelected(true);
                    setAvailableBalance(availableBalace- player.price);
                    setPurchasedPlayers([...purchasedPlayers,player]);

                  }} className="btn">{isSelected?'Selected':'Choose Player'}</button>
                </div>
              </div>
            </div>
            </Container>
            </div>
    );
};

export default Players;