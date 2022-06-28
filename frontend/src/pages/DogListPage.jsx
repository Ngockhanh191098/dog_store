
import DogList from "../components/DogList";
import {  useEffect, useState } from "react";
import Axios from "axios";

const DogListPage = () => {
    const [listDog, setListDog] = useState([]);
    
    useEffect( () => {
        async function getData() {
            const res = await Axios.get(
                "http://127.0.0.1:8080/dogs/",{
                    headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('accessToken')
                    }
                }
            );
            console.log(res.data);
            return res;
        }
        getData().then(res => {
            setListDog(res.data);
        });
        getData().catch(err => console.log(err));
    }, [])

    return ( 
        <>
            <DogList listDog={listDog}/>
        </>
    );
}

export default DogListPage;