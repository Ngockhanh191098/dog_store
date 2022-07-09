import '../style/componentStyle/pagination.css';
import {v4} from 'uuid'
import Axios from 'axios';
import { useState } from 'react';
//get TôngsoTrang

// start = 1 , end : stat + 4

// Page1 CLick () => data 1 > offSet X Limit 

// page2 Click  > 
const Pagination = (props) => {

    const [indexActive,setIndexActive] = useState(1);

    const [dataTemp , setdataTemp] = useState([]);
    
    const { setListDog, count,limit } = props;
    
    if((count % limit) != 0){

        var countPage = Math.floor(count/limit) + 1
    }
    else {
        var countPage = Math.floor(count/limit)

    }
    let data = [];

    for(let i = 1 ; i <= countPage ; i++){
        data.push(i)
    }
    // var n = 0 ;
    // let datat = data.slice(n,n+5)
    // setdataTemp(datat)
   

    const pagination2 = ({e}) => {
    //    if(e === dataTemp.length){
    //        n++;
    //        console.log(n)
    //     dataTemp = data.slice(n,n+5)
    //    }
        setIndexActive(e);
        let offSet = e * limit - limit;

        Axios.get(`http://127.0.0.1:8080/dogs?offset=${offSet}&limit=${limit}`,{
            headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem('accessToken')
            }
        })
        .then(res => {
            const data = res.data.rows;
            setListDog(data);
        })
        .catch(err => {
            console.log(err);
        })

    }
    const nextPage = () => {
        if(indexActive === countPage){
            return
        }else {
            let offSet = (indexActive + 1) * limit - limit;
        setIndexActive(indexActive + 1)
        Axios.get(`http://127.0.0.1:8080/dogs?offset=${offSet}&limit=${limit}`,{
            headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem('accessToken')
            }
        })
        .then(res => {
            const data = res.data.rows;
            setListDog(data);
        })
        .catch(err => {
            console.log(err);
        })

        }
    }

    const prevPage = () => {
        if(indexActive === 1) {
            return;
        }else {
            let offSet = (indexActive - 1) * limit - limit;
            setIndexActive(indexActive - 1);
            Axios.get(`http://127.0.0.1:8080/dogs?offset=${offSet}&limit=${limit}`,{
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('accessToken')
                }
            })
            .then(res => {
                const data = res.data.rows;
                setListDog(data);
            })
            .catch(err => {
                console.log(err);
            })
            }

    }
   
 
    return ( 
        <div className="pagination-container">
            <ul className="pagin-list">
                <li onClick={() => prevPage()}>PREVIOUS</li>
                {
                    
                    data.map((e) => {
                        return (<li key={v4()} data-index={e} onClick={() => pagination2({e})}>{e}</li>)
                    })
                }

                <li onClick={() => nextPage()}>NEXT</li>
            </ul>
        </div>
    );
}

export default Pagination;