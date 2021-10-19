import React from 'react';
import logo from '../../images/contact.png'

const ContactUs = () => {
    return (
        <div>

            <h2 className="pt-20 text-center  font-bold text-4xl text-blue-700">Contact Us</h2>
            <div className="grid lg:grid-cols-2 pb-20">
                <img className="lg:pl-20 pt-20" src={logo} alt="" />
                <div className="mt-24 lg:ml-40 ml-10 lg:pl-40 lg:pl-20">
                    <input className="border border-gray-800  pt-2 pb-2 lg:pl-40 block" type="text" placeholder="NAME" />
                    <input className="border border-gray-800 mt-2 pt-2 pb-2 lg:pl-40 block" type="text" placeholder="EMAIL" />
                    <input className="border border-gray-800 mt-2 pt-2 pb-2 lg:pl-40 block" type="text" placeholder="NUMBER" />
                    <input className="border border-gray-800 mt-2 pt-14 lg:pl-40 pb-14 block" type="text" placeholder="Enter your Messege" />
                    <button className="border border-gray-800 block mt-2  p-2 bg-blue-700 text-white rounded-lg">Send Messege</button>

                </div>
            </div>

            <div className="grid lg:grid-cols-3 ml-10">

                <div className="">
                    <p className="text-2xl pb-5">Our Office</p>
                    <p>28 Jackson BLVD STE 1020 Chicago</p>
                    <p className="pb-10"> IL 60604-2340</p>
                </div>
                <div className="">
                    <p className="text-2xl pb-5">Call us Now</p>
                    <p className="text-red-700 font-bold text-xl pb-2">1800-123-4567</p>
                    <p className="pb-10">info@dentistry.com</p>
                </div>
                <div className="">
                    <p className="text-2xl pb-5">Have A Question</p>
                    <p className="pb-10">We get lots of mail and want to answer your inquires go to FAQ’S</p>
                </div>
            </div>


        </div>
    );
};

export default ContactUs;