import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from './firebase.init';
import { useLocation } from 'react-router-dom';

const auth = getAuth(app);

const Requreauth = ({children}) => {
    const [user] = useState(auth);
    const location = useLocation();
    if(!user){
        
    }
    return (
        <div>
            
        </div>
    );
    return children;
};

export default Requreauth;