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
      <div>
        <LoginFormModal />
      </div>
      <div>
        <GetStartedModal />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}

export default NavBar;
