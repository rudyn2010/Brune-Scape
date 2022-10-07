import React from 'react';
import { NavLink } from 'react-router-dom';
import GetStartedModal from './auth/GetStartedModal';
import LoginFormModal from './auth/LoginFormModal';
import LogoutButton from './auth/LogoutButton';
import "./NavBar.css";
import logo from "../images/helmet.png"

const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img className="navbar-logo" src={ logo }></img>
        </NavLink>
      </div>
      <div className='modal-area'>
        <div className='modal-div-nb'>
          <LogoutButton />
        </div>
        <div className='modal-div-nb gray-bc'>
          <LoginFormModal />
        </div>
        <div className='modal-div-nb orng-bc'>
          <GetStartedModal />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
