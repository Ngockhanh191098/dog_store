import { useState } from 'react';
import '../style/componentStyle/formRegister.css';
import Axios from 'axios';

const FormRegister = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('member');

    const handleRegister = () => {
        const dataUser ={
            username: username,
            email: email,
            phone: phone,
            password: password,
            role: role
        }
        Axios.post(
            "http://127.0.0.1:8080/api/auth/signup",
            dataUser
        )
        .then(res => {
            console.log(res.data)
            alert('Register success!')
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div className="form-container">
            <h2>Register</h2>
            <div className="form-group">
                <label>Username</label>
                <input 
                    type='text' 
                    placeholder="Enter your username..."
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input 
                    type='text' 
                    placeholder="Enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type='text' placeholder="Enter your phone number..." onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type='password' placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Role</label>
                <select onChange={(e) => setRole(e.target.value)}>
                    <option value='member'>Member</option>
                    <option value='admin'>Admin</option>
                </select>
            </div>
            <button type="button" onClick={handleRegister}>Submit</button>
        </div>
    );
}
 
export default FormRegister;