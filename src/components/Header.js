import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


const Header = () => (
    <div>
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="">
                <img src={logo} width="80" height="50" class="d-inline-block align-top" alt="" />
                Electrophonik sound Management Application
            </a>
        </nav>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>Add Sound</NavLink>
            <NavLink to='/help' activeClassName='activeNav'>Help</NavLink>
        </div>
    </div>
);

export default Header;