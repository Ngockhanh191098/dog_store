import Logo from '../images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../style/componentStyle/header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../Contexts/UserContext';


const Header = () => {
    // const { username } = props;
    const { isLogged } = useContext(UserContext);

    const [drop,setDrop] = useState(false);
    const navigate = useNavigate();
    const handleClickSearch = () => {
        return navigate('/search');
    }
    const handleDropdown = () => {
        setDrop(true);
    }
    const handleDropdown1 = () => {
        setDrop(false);
    }
    const redirectRegister = () => {
        return navigate('/register');
    }
    const redirectLogin = () => {
        return navigate('/login');
    }
    const redirectHome = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('isAdmin');
        alert('Logout success!');
        return navigate('/');
    }
    const redirectCart = () => {
        return navigate('/cart');
    }
    const redirectAccountManager = () => {
        return navigate('/account-manager');
    }
    return ( 
        <div className="header-container">
            <Link to='/' className="header-logo">
                <img src={Logo}/>
                <h2>PET SHOP</h2>
            </Link>
            <div className='header-search'>
                <input type='text' placeholder='Seach now...'/>
                <SearchIcon className='header-seach-icon' onClick={handleClickSearch}/>
            </div>
            <div className='header-cart'>
                <ShoppingCartIcon className='cart-item' onClick={redirectCart}/>
                <span>0</span>
            </div>
                {!drop ? (
                    <div className='header-account'>
                        <div onClick={handleDropdown}>
                            <span>Account</span>
                            <ArrowDropDownIcon className='drop-item'/>
                        </div>
                    </div>
                ) : (
                    <div className='header-account'>
                        <div onClick={handleDropdown1}>
                            <span>Account</span>
                            <ArrowDropDownIcon className='drop-item'/>
                            <div className='header-account-item'>
                                {isLogged ? (
                                    <>
                                        <p onClick={redirectHome}>Logout</p>
                                        <p onClick={redirectAccountManager}>Account Manager</p>
                                        
                                    </>
                                ) : (
                                    <>
                                        <p onClick={redirectRegister}>Register</p>
                                        <p onClick={redirectLogin}>Login</p>
                                    </>
                                )}
                                
                            </div>
                        </div>
                    </div>
                    
                )}
            
        </div>
     );
}
 
export default Header;