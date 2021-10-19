import React from 'react';
import useAuth from '../../../Hooks/UseAuth/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <p>log in please</p>
            <button onClick={signInUsingGoogle} className="bg-yellow-700 text-white rounded-lg mt-20 lg:ml-44 ml-10  p-3 mb-3">Sign In</button>
        </div>
    );
};

export default Login;