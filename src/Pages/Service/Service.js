import useServices from "../../Hooks/useServices/useServices";
import SetServices from "../SetServices/SetServices";


const Service = () => {
    const [services] = useServices([]);

    return (
        <div className="grid grid-cols-3 ">
            {
                services.map(serv => <SetServices
                    serv={serv}
                ></SetServices>)
            }
        </div>
    );
};

export default Service;