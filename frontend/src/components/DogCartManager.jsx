import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../style/componentStyle/listDogManager.css';
import axios from 'axios';

const DogCartManager = (props) => {
    const { id, title, price, breed, image, description } = props;

    const deleteDog = () => {
        axios.delete(
            `http://127.0.0.1:8080/dogs/${id}`,{
                    headers: {
                    "x-access-token": localStorage.getItem('accessToken')
                }
            }
        )
        .then((res) => {
            alert(res.data.message);
        })
        .catch(err => console.log(err))
    }
    return ( 
        <div className="dog-manager-container">
            <div className="dog-img-manager">
                <img src={`http://127.0.0.1:8080/public/images/${image}`} alt={title}/>
            </div>
            <div className="dog-title-manager">
                <strong>Title : </strong><span>{title}</span>
            </div>
            <div className="dog-price-manager">
                <strong>Price : </strong><span>{price}</span>
            </div>
            <div className="dog-breed-manager">
                <strong>Breed : </strong><span>{breed}</span>
            </div>
            <div className="dog-desc-manager">
                <strong>Description : </strong><span>{description}</span>
            </div>
            <div className='handle-btn'>
                <EditIcon className='edit-btn'/>
                <DeleteIcon className='delete-btn' onClick={deleteDog}/>
            </div>
        </div>
    );
}

export default DogCartManager;