import React, { useState } from 'react';
import '../AddInfo/Addinfo.css'

const Addinfo = () => {
    const[users, setUsers] = useState([]);

    const handleAdditems = event => {
        
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.address.value;
        const email = event.target.email.value;
        const gender = event.target.gender.value;
        const bloodgroup = event.target.bloodgroup.value;
        const user = { name, address,email,gender,bloodgroup };
        //console.log(user);
        

        fetch('http://localhost:5000/blood', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                /*const newBook = [user, data];
                setUsers(newBook); */
                //console.log("Sucess", data);
                alert("Your data Added to Server", data);
                
            })


    }

    return (
        <div>
            <form onSubmit={handleAdditems}>
                <div className="form">
                    <div className="form-body">
                        <div className="username">
                            <label className="form__label" htmlFor="firstName">Full Name </label>
                            <input className="form__input" type="text" id="name" name='fullName' placeholder="First Name" />
                        </div>
                        <div className="lastname">
                            <label className="form__label" htmlFor="lastName">Address </label>
                            <input type="text" name="address" id="lastName" className="form__input" placeholder="Address" />
                        </div>
                        <div className="email">
                            <label className="form__label" htmlFor="email">Email </label>
                            <input type="email" id="email" className="form__input" name='email' placeholder="Email" />
                        </div>
                        <div className="password">
                            <label className="form__label" htmlFor="password">Gender </label>
                            <input className="form__input" type="text" id="password" name='gender' placeholder="Male/Female" />
                        </div>
                        <div className="confirm-password">
                            <label className="form__label" htmlFor="confirmPassword">Blood Group </label>
                            <input className="form__input" type="text" id="confirmPassword" name='bloodgroup' placeholder="A+/B+/AB+" />
                        </div>
                    </div>
                    <div class="footer">
                        <button type="submit" class="btn">UPDATE PROFILE</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Addinfo;
