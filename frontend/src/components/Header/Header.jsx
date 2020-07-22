import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';
import { logout } from '../../redux/actions/users';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const Header = () => {
    const user = useSelector(state => state.users.user); // lo mismo que connect en hooks
    const cart = useSelector(state => state.movies.cart);
    return (
        <header>
            <NavLink to='/' exact>Home</NavLink>
            {user?._id
                ?
                <div className="userZone">
                    <NavLink to='/profile' exact>{user.email}</NavLink>
                    <Badge count={cart.length}>
                        <ShoppingCartOutlined className="shopping-icon" />
                    </Badge>
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