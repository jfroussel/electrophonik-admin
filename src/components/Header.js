import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


const Header = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">
                Electrophonik sound Management Application
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
                    <NavLink className="nav-item nav-link" to='/add' activeClassName='activeNav'>Add Sound</NavLink>
                    <NavLink className="nav-item nav-link" to='/help' activeClassName='activeNav'>Help</NavLink>
                </div>
            </div>
        </nav>
    </div>
);

export default Header;