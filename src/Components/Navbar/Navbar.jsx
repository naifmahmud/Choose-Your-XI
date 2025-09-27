import React from 'react';
import logo from '../../assets/logo-footer.png';
import coinImg from '../../assets/coin.png';
import Container from '../Container';

const Navbar = () => {
  return (
    <div>
        <Container>
    <div className="navbar">
  <div className="flex-1">
    <a className="btn btn-ghost"><img src={logo} alt="" className='w-15 h-15' /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
      <li><a className='shadow-md font-semibold py-1.5'><span>0</span> Coin <img src={coinImg} alt="" className='w-4 h-4' /></a></li>
    </ul>
  </div>
</div>
  </Container>
    </div>
  );
};

export default Navbar;