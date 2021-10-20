import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth/useAuth';

const Register = () => {
    const { signInUsingGoogle, error, handlRegister, handleEmailChange, handlePasswordChange } = useAuth();
    return (
        <div>
            <div className="grid justify-items-center items-center">
                <h5 className="text-3xl text-blue-700 pb-10 font-bold">Please Register</h5>
                <form onSubmit={handlRegister} >
                    <input onBlur={handleEmailChange} className="block border border-yellow-600 mb-2 px-10 py-3" type="email" name="" id="" placeholder="Your Email" required />
                    <input onBlur={handlePasswordChange} className="block border border-yellow-600 px-10 py-3" type="password" name="" id="" placeholder="Enter Password" required />
                    <div className="block text-red-700">{error}</div>
                    <input className="bg-blue-300 text-base rounded px-1 py-1 mr-2 mt-2" type="submit" value="Register" />

                </form>
                <p className="text-2xl mt-10">Already have an account? <Link to="/login"> <span className="text-red-700 font-bold">Log In</span> </Link></p>

                <button onClick={signInUsingGoogle} className="bg-yellow-700 text-white rounded-lg  px-5 py-3 my-5">Sign In</button>
            </div>
        </div>
    );
};

export default Register;