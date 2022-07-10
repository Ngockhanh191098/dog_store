import '../style/componentStyle/formAddDog.css'; 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const FormAddDog = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [breed, setBreed] = useState('Pug');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    
    const addNewDog = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('breed', breed);
        formData.append('image', image);
        formData.append('description', description);

        Axios.post('http://127.0.0.1:8080/dogs/',formData,{
            headers: {
                "Content-Type": "multipart/form-data",
                "x-access-token": localStorage.getItem('accessToken')
            }
        }
        )
        .then(res => {
            setTitle('');
            setPrice('');
            setBreed('');
            setImage(null);
            setDescription('');
            if(res.status === "403") {
                alert("You don't permission to post a dog!");
                return;
            }
            alert('add dog success!');
            return navigate('/dog-manager');
        })
        .catch(err => console.log(err))
    }
    return ( 
        <div className="add-dog-container">
            <h2>ADD DOG</h2>
            <div className="form-group">
                <label>Title</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type='text' onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Breed</label>
                <select name="breed" onChange={(e) => setBreed(e.target.value)}>
                    <option value="Pug">Pug</option>
                    <option value="Puddle">Puddle</option>
                    <option value="Corgy">Corgy</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Pit Bull">Pit Bull</option>
                    <option value="Husky">Husky</option>
                </select>
            </div>
            <div className="form-group">
                <label>Image</label>
                <input type='file' onChange={(e) => setImage(e.target.files[0])}/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea type='text' onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <button onClick={addNewDog}>ADD</button>
        </div>
     );
}
 
export default FormAddDog;