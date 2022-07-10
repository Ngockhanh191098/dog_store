import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import DogCartManager from './DogCartManager';
import Pagination from './Pagination';

const ListDogManager = () => {
    const navigate = useNavigate();

    const [listDog, setListDog] = useState([]);
    const [count, setCount] = useState(1);
    const [limit, setLimit] = useState(1);
    const [offset, setOffset] = useState(1);
    
    useEffect( () => {
        async function getData() {
            const res = await Axios.get(
                "http://127.0.0.1:8080/dogs?offset=0&limit=10",{
                    headers: {
                    "Content-Type": "application/json",
                    }
                }
            );
            return res;
        }
        getData().then(res => {
            setListDog(res.data.rows);
            setCount(res.data.count);
            setLimit(res.data.limit);
            setOffset(res.data.offset);
        });
        getData().catch(err => console.log(err));
    }, [])

    const redirectAddDog = () => {
        return navigate('/add-dog')
    }

    return ( 
        <>
            <h2 style={{textAlign:"center",margin:"30px"}}>List Dogs Manager</h2>
            <section className="doglist-manager-container">
                {listDog.map((dog) => {
                    return (
                        <div key={dog.id}>
                            <DogCartManager
                                id={dog.id}
                                title={dog.title}
                                price={dog.price}
                                breed={dog.breed}
                                image={dog.image}
                                description={dog.description}
                            />
                        </div>
                    )
                })}
            </section>
            <Pagination limit={limit} offset={offset} setListDog={setListDog} count={count}/>
            <button onClick={redirectAddDog} style={{width: "100%", padding: "10px", margin: "30px 0"}}>ADD DOG</button>

        </>
        
    );
}

export default ListDogManager;