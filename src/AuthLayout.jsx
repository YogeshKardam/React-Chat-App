import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';




function AuthLayout({children, authentication=true}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication){
            console.log("authStatus", authStatus)
            console.log("authentication", authentication)
            navigate('/login');
        } else if (!authentication && authStatus !== authentication) {
            navigate('/');
        }
        setLoading(false);
    },[navigate, authentication, authStatus]);
    
  return loading ? <h1>Loading....</h1> : <>{children}</>
}

export default AuthLayout