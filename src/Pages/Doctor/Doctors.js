import React from 'react';
import useServices from '../../Hooks/useServices/useServices';
import SetDoctor from '../SetDoctor/SetDoctor';

const Doctors = () => {
    const [services] = useServices([]);
    return (
        <div className="grid lg:grid-cols-3">

            {
                services.map(doctor => <SetDoctor
                    key={doctor.id}
                    doctor={doctor}
                ></SetDoctor>)
            }
        </div>
    );
};

export default Doctors;