import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { connect, useSelector } from 'react-redux';
import { logout } from '../../redux/actions';
const Header = ({
    /*user*/
}) => {
    const user = useSelector(state => state.user); // lo mismo que connect en hooks

    return (
        <header>
            <NavLink to='/' exact>Home</NavLink>
            {user?._id
                ?
                <div className="userZone">
                    <NavLink to='/profile' exact>{user.email}</NavLink>
                    <a href="#" onClick={logout}>Logout</a>
                </div>
                :
                <div className="guestZone">
                    <NavLink to='/login' exact>Login</NavLink>
                    <NavLink to='/signup' exact>Sign up</NavLink>
                </div>
            }
        </header>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         pepito: state.user
//     }
// }
// export default connect(mapStateToProps)(Header)
export default Header;