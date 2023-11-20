import React, { useContext, useState } from 'react';
import '../Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the necessary Firebase auth function
import auth from '../../../firebase.init'; // Make sure to adjust the import path
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const{login} = useContext(AuthContext);
    const navigate = useNavigate();
    const loginUser =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate("/");
        })
        .then(err => console.log(err));
    }
    

    
    

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={loginUser}>
                <h1>Login</h1>
                <label htmlFor="username">Email</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Enter your Email"
                    
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    
                />

                <p>Don't have an Account? <Link to={"/signup"} className='register'>Register</Link></p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
