import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div className="App">
            <img className="mt-4 mb-5 mx-10 " src={logo} alt="" />
            <nav className="bg-black text-white text-3xl font-medium h-16">
                <Link className="mx-10" to="/home">Home</Link>
                <Link className="mx-10" to="/services">Services</Link>
                <Link className="mx-10" to="/doctors">Doctors</Link>
                <Link className="mx-10" to="/about">About Us</Link>
            </nav>
        </div>

    );
};

export default Header;