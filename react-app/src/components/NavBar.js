import React from 'react';
import { NavLink } from 'react-router-dom';
import GetStartedModal from './auth/GetStartedModal';
import LoginFormModal from './auth/LoginFormModal';
import LogoutButton from './auth/LogoutButton';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to='/users' exact={true} activeClassName='active'>
          Users
        </NavLink>
      </div>
      <div className='modal-area'>
        <div className='modal-div-nb gray-bc'>
          <LoginFormModal />
        </div>
        <div className='modal-div-nb orng-bc'>
          <GetStartedModal />
        </div>
        <div className='modal-div-nb'>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
