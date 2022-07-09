import { Link } from "react-router-dom";
import '../style/componentStyle/listDog.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const DogCart = (props) => {
    const { title, price, breed, image, description } = props;
    return ( 
        <>
            <section className="dog-cart-container">
                <div className="dog-img">
                    <Link to="/dog-info">
                        <img src={`http://127.0.0.1:8080/public/images/${image}`} alt={title}/>
                    </Link>
                </div>
                <div className="dog-info">
                    <Link to="/dog-info" className="dog-title">{title}</Link>
                </div>
                <div className="dog-price-breed">
                    <Link to="/dog-info" className="dog-price">Price: {price} $</Link>
                    <Link to="/dog-info" className="dog-breed">Breed: {breed}</Link>
                </div>
                {/* <p className="dog-description">{description}</p> */}
                <div className="add-buy">
                    <AddShoppingCartIcon className="add-cart" />
                    <button className="buy-now">BUY NOW</button>
                </div>
            </section>
        </>
    );
}

export default DogCart;