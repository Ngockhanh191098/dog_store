import Axios from 'axios';
import { useState, React, useContext } from 'react';
import '../style/componentStyle/formRegister.css';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';


const FormLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const  {isAdmin,setIsAdmin} = useContext(UserContext);

    const handleLogin = () => {
        const dataLogin = {
            username: username,
            password: password
        }
        Axios.post(
            "http://127.0.0.1:8080/api/auth/signin",
            dataLogin
        )
        .then(res => {
            const accessToken = res.data.accessToken;
            localStorage.setItem("accessToken",accessToken);
            const role = res.data.role;
            const setRole = localStorage.setItem("isAdmin", role);
            const getRole = localStorage.getItem('isAdmin')
            if(getRole === "admin") {
                setIsAdmin(true);
                alert('Login Successfully!');
                return navigate('/');
            }
            setIsAdmin(false);
            alert('Login Successfully!');
            return navigate('/');
        })
        .catch(err => {
            alert('Login Fail!');
            console.log("message" + err)
        });
    }

    return ( 
        <div className="form-container">
            <h2>Login</h2>
            <div className="form-group">
                <label>Username</label>
                <input type='text' placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type='password' placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="button" onClick={handleLogin}>Submit</button>
        </div>
    );
}

export default FormLogin;