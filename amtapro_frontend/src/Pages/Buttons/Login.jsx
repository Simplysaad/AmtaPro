import React from 'react';
import {Link} from 'react-router-dom'
import {login} from '../../assets/links'

const Login = () => {

    return (
        <>
            <Link to={login}><button 
                className="p-2 m-1 md:p-2 md:m-2 bg-primary hover:bg-foreground hover:text-primary rounded-lg transition-colors"
            >
                Login
            </button></Link>
        </>
    );
}

export default Login;