import React from 'react';
import deleteBtn from '../../assets/delete.png';
import Container from '../Container';
import { toast } from 'react-toastify';

const PurchasedPlayers = ({playerDetails,removedPlayer}) => {
    const handleRemove= ()=>{
        removedPlayer(playerDetails);
        toast("player removed");
    }
    return (
        <div>
            <Container> 
            <div className='flex justify-between shadow-md py-2 px-5 items-center bg-gray-100'>
             <div className='flex gap-5'>
                <img src={playerDetails['player-image']} alt=""  className='w-10 h-10 rounded-xl'/>
                <div>
                    <h2 className='font-bold'>{playerDetails['player-name']}</h2>
                    <p>{playerDetails['playing-role']}</p>
                </div>
                    </div>
                <button onClick={handleRemove} className='cursor-pointer'><img src={deleteBtn} alt="" className='w-6 h-6'/></button>
                </div>
                </Container>
            </div>
    );
};

export default PurchasedPlayers;