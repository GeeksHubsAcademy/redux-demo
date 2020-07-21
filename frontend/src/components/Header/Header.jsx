import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
const Header = () => {
    const user = null
    return (
        <header>
            <NavLink to='/' exact>Home</NavLink>
                {/* <div className="userZone">
                    <NavLink to='/profile' exact>{user.email}</NavLink>
                </div>
                : */}
                <div className="guestZone">
                    <NavLink to='/login' exact>Login</NavLink>
                    <NavLink to='/signup' exact>Sign up</NavLink>
                </div>

        </header>
    )
}

export default Header
