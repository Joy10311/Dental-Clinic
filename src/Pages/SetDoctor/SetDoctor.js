import React from 'react';

const SetDoctor = ({ doctor }) => {
    const { person, personImg, gender, degree, contact } = doctor;
    return (
        <div>
            <div className=" border-solid border-4 border-light-blue-500 mx-4 my-4 ">
                <div >
                    <img src={personImg} alt="" />
                    <h5 className="font-bold text-red-700 text-center text-2xl ">Name: {person}</h5>
                    <h5 className="font-semibold text-center text-xl">Degree: {degree}</h5>
                    <h5 className="font-semibold text-center text-xl">Number: {contact} </h5>
                    <h6 className="font-semibold text-center">Gender: {gender}</h6>
                    <button className="bg-blue-700 text-white rounded-lg mt-3 lg:ml-44 ml-20  p-3 mb-3">Contact Me</button>
                </div>
            </div>
        </div>
    );
};


export default SetDoctor;