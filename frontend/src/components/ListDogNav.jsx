import '../style/componentStyle/listdognav.css';

const ListDogNav = () => {
    return ( 
        <div className="nav-list-dog-container">
            <div className="choose-item">POPULAR</div>
            <div className="choose-item">BEST SELLER</div>
            <div className="select-item">
                <label for="price">PRICE</label>
                <select name="price" id="price">
                    <option value="volvo"> 100 - 300 </option>
                    <option value="saab">300 - 600</option>
                    <option value="mercedes">600 - 1000</option>
                    <option value="audi">Up 1000</option>
                </select>
            </div>
            <div className="select-item">
                <label for="breed">BREED</label>
                <select name="breed" id="breed">
                    <option value="volvo">Pug</option>
                    <option value="saab">Puddle</option>
                    <option value="mercedes">Chihuahua</option>
                    <option value="audi">Corgy</option>
                    <option value="audi">Other</option>
                </select>
            </div>
        </div>
     );
}
 
export default ListDogNav;