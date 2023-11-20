import React, { useContext, useState } from 'react';

import './Signup.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



const Signup = () => {
    const{createUser} = useContext(AuthContext);

    const handleSignup = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result=>{
            const user  = result.user;
            console.log(user);

        })
        .catch(err => console.log(err));

    }

    
    

    return (
        <div className="signup-container">
            <form onSubmit={handleSignup} className="signup-form">
                <h1>Registration</h1>
                <div className="input-group">
                    <div>
                        <label htmlFor="email">Verified Email</label>
                        <input
                           
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Strong Password</label>
                        <input
                            
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Signup;
