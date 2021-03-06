import useServices from "../../Hooks/useServices/useServices";
import SetServices from "../SetServices/SetServices";


const Service = () => {
    const [services] = useServices([]);

    return (
        <div className="grid lg:grid-cols-3 ">
            {
                services.map(serv => <SetServices
                    key={serv.id}
                    serv={serv}
                ></SetServices>)
            }
        </div>
    );
};

export default Service;