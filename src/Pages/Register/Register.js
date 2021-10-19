import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/useAuth';

const Register = () => {
    const { signInUsingGoogle, error, handlRegister, handlePasswordChange, handleEmailChange } = useAuth();
    return (
        <div>
            <div className="grid justify-items-center items-center">
                <form onSubmit={handlRegister} >
                    <input onBlur={handleEmailChange} className="block border border-red-500 mb-2" type="email" name="" id="" placeholder="Your Email" />
                    <input onBlur={handlePasswordChange} className="block border border-red-500" type="password" name="" id="" placeholder="Enter Password" />
                    <div className="block text-red-800">{error}</div>
                    <input className="bg-blue-300 text-base rounded px-1 py-1 mr-2 mt-2" type="submit" value="Register" />

                </form>
                <p className="text-2xl mt-10">Already have an account? <Link to="/login"> <span className="text-red-700">Log In</span> </Link></p>

                <button onClick={signInUsingGoogle} className="bg-yellow-700 text-white rounded-lg  px-5 py-3 my-5">Sign In</button>
            </div>
        </div>
    );
};

export default Register;