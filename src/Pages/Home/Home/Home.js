import useServices from '../../../Hooks/useServices/useServices';
import Services from '../Services/Services';

const Home = () => {
    const [services] = useServices([]);

    return (
        <div className="grid grid-cols-3 ">
            {
                services.slice(0, 3).map(service => <Services
                    key={service.id}
                    service={service}
                ></Services>)
            }
        </div>
    );
};

export default Home;

