import { useNavigate } from 'react-router-dom';

const ListDogManager = () => {
    const navigate = useNavigate();

    const redirectAddDog = () => {
        return navigate('/add-dog')
    }

    return ( 
        <>
            <div>List dogss</div>
            <button onClick={redirectAddDog}>ADD DOG</button>

        </>
        
     );
}
 
export default ListDogManager;