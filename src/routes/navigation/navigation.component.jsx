import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import './navigation.styles.scss'

const NavBar = () => {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop" >Shop</Link>
                    <Link className="nav-link" to="/sign-in" >Sign In</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar
