
import DogList from "../components/DogList";
import {  useEffect, useState } from "react";
import Axios from "axios";
import Pagination from "../components/Pagination";

const DogListPage = () => {
    const [listDog, setListDog] = useState([]);
    const [count, setCount] = useState(1);
    const [limit, setLimit] = useState(1);
    const [offset, setOffset] = useState(1);
    // const [page, setPage] = useState(1);

    useEffect( () => {
        async function getData() {
            const res = await Axios.get(
                "http://127.0.0.1:8080/dogs?offset=0&limit=6",{
                    headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('accessToken')
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

    

    return ( 
        <>
            <DogList listDog={listDog} />
            <Pagination count={count} limit={limit} offset={offset} setListDog={setListDog}/>
        </>
    );
}

export default DogListPage;