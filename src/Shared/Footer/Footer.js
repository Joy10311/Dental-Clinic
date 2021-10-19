import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black   text-white">
            <div className="grid lg:grid-cols-4 pl-10">
                <div className="pt-5  font-semibold ">
                    <Link to="/doctors"><p className="text-2xl pb-3">Our Doctors</p></Link>
                    <p>Richard Seth</p>
                    <p>John Deo</p>
                    <p>Naina Shah</p>
                    <p>Soim Hicks</p>
                    <p>Helena Torres</p>
                    <p className="pb-10">Martin Lee</p>
                </div>
                <div className=" pt-5 font-semibold">
                    <Link to="/about"><p className="text-2xl pb-3">About Clinic</p></Link>
                    <p> Our Clinic</p>
                    <p>Photo Gallery</p>
                    <p>Career</p>
                    <p> Testimonials</p>
                </div>
                <div className=" pt-5 font-semibold">
                    <Link to="/services"><p className="text-2xl pb-3">Our Services</p></Link>
                    <p>Teeth Whitening</p>
                    <p>Gum Treatment</p>
                    <p>Sleep Apnea</p>
                    <p>Restorations</p>
                    <p>Smile Design</p>
                    <p>Root Canal</p>
                </div>
                <div className=" pt-5 font-semibold">
                    <p className="text-2xl pb-3">Business Hours</p>
                    <p>Monday : 8:30 - 9:00</p>
                    <p>Tuesday : 8:00 - 9:00</p>
                    <p>Wednesday : 8:00 - 9:00</p>
                    <p>Thursday : 8:30 - 9:00</p>
                    <p>Friday : 10:00 - 4:00</p>
                    <p>Saturday : Closed</p>
                    <p>Sunday : Closed</p>
                </div>

            </div>
            <p className="text-center">Copyright © 2016 - 2019. Yogi All rights reserved</p>
        </div>
    );
};

export default Footer;