import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <nav className="bg-gray-200  text-2xl font-medium ">
                <Link to="/home"><img className="pt-7" src={logo} alt="" /></Link>
                <div className="mb-10 text-center pb-7">
                    <Link className="mx-10 lg:inline block" to="/home">Home</Link>
                    <Link className="mx-10 lg:inline block" to="/services">Services</Link>
                    <Link className="mx-10 lg:inline block" to="/doctors">Doctors</Link>
                    <Link className="mx-10 lg:inline block" to="/shop">Drug Shop</Link>
                    <Link className="mx-10 lg:inline block" to="/about">About Clinic</Link>
                    <Link className="mx-10 lg:inline block" to="/contact">Contact Us</Link>
                    {user?.email ?
                        <button onClick={logOut} className="bg-blue-300 text-base rounded px-1 py-1 mr-2">Log Out</button> :
                        <Link className="mx-10 lg:inline block" to="/login">Log In</Link>}
                    <Link to=""> {user?.displayName}</Link>
                </div>
            </nav>
        </div>

    );
};

export default Header;