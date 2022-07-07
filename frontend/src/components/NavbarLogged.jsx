import { Link } from 'react-router-dom';
import '../style/componentStyle/navbar.css';

const NavbarLogged = () => {

    return ( 
        <div className="nav-container">
            <ul className="nav-list">
                <Link to="/" className='link-title'><li>HOME</li></Link>
                <Link to="/dog-manager" className='link-title'><li>MANAGER DOGS</li></Link>
                <Link to="/user-manager" className='link-title'><li>MANAGER USERS</li></Link>
                <Link to="/contact" className='link-title'><li>CONTACT</li></Link>
                <Link to="/support" className='link-title'><li>SUPPORT</li></Link>
            </ul>
        </div>
    );
}

export default NavbarLogged;
<>
    navbar
</>