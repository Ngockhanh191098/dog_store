import '../style/componentStyle/pagination.css';
import Axios from 'axios';

const Pagination = (props) => {
    const { setListDog } = props;
    const page1 = () => {
        Axios.get(
            "http://127.0.0.1:8080/dogs?offset=0&limit=6",{
                headers: {
                "Content-Type": "application/json",
                }
            }
        )
        .then(res => {
            const data = res.data.rows;
            setListDog(data);
        })
        .catch(err => console.log(err))
    };
    const page2 = () => {
        Axios.get(
            `http://127.0.0.1:8080/dogs?offset=6&limit=6`,{
                headers: {
                "Content-Type": "application/json",
                }
            }
        )
        .then(res => {
            const data = res.data.rows;
            setListDog(data);
        })
        .catch(err => console.log(err))
    };
    const page3 = () => {
        Axios.get(
            `http://127.0.0.1:8080/dogs?offset=12&limit=6`,{
                headers: {
                "Content-Type": "application/json",
                }
            }
        )
        .then(res => {
            const data = res.data.rows;
            setListDog(data);
        })
        .catch(err => console.log(err))
    };
    const page4 = () => {
        Axios.get(
            `http://127.0.0.1:8080/dogs?offset=18&limit=6`,{
                headers: {
                "Content-Type": "application/json",
                }
            }
        )
        .then(res => {
            const data = res.data.rows;
            setListDog(data);
        })
    };
    return ( 
        <div className="pagination-container">
            <ul className="pagin-list">
                <li>PREVIOUS</li>
                <li onClick={page1}>1</li>
                <li onClick={page2}>2</li>
                <li onClick={page3}>3</li>
                <li onClick={page4}>4</li>
                <li>NEXT</li>
            </ul>
        </div>
    );
}

export default Pagination;