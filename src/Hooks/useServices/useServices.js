import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices]
}
export default useServices;

// https://mocki.io/v1/1194f217-a6d2-48f9-beba-f8f671c6b71f