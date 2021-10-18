import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices/useServices';
import Services from '../Services/Services';
import logo from '../../../images/banner.jpg'

const Home = () => {
    const [services] = useServices([]);

    return (
        <div>

            <div className="grid grid-cols-3">
                {
                    services.slice(0, 3).map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div>
            <div className="justify-items-center align-center">
                <Link to="/services"><button className="bg-gray-500 text-white rounded-lg mt-3 ml-5  p-3 mb-3 items-center">Show More</button></Link>
            </div>
        </div >
    );
};

export default Home;

