import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
import '../style/componentStyle/tophead.css';

const TopHead = () => {
    return ( 
        <div className="top-head-container">
                <Link to='/' className='facebook-head'><FacebookIcon /> Facebook</Link>
                <Link to='/' className='phone-head'><LocalPhoneIcon /> Phone: 0855307100</Link>
        </div>
     );
}
 
export default TopHead;