import React from 'react';
import useServices from '../../Hooks/useServices/useServices';
import SetDoctor from '../SetDoctor/SetDoctor';

const Doctors = () => {
    const [services] = useServices([]);
    return (
        <div className="grid grid-cols-3">

            {
                services.map(doctor => <SetDoctor
                    doctor={doctor}
                ></SetDoctor>)
            }
        </div>
    );
};

export default Doctors;