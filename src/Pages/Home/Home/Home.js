import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices/useServices';
import Services from '../Services/Services';
import logo from '../../../images/before-after-box.jpg'
import './Home.css'


const Home = () => {
    const [services] = useServices([]);

    return (
        <div>
            <div className="banner">
                <h2 className="text-4xl pt-3 lg:ml-60 ml-10 text-red-800">Always Smile With Us</h2>
                <h1 className="text-4xl pt-32 pb-3 ml-10">Our Smile <br /> Speaks Themeselvs</h1>
                <p className="text-2xl ml-10">Tooth whitening can make your teeth <br /> sparkling white and beautiful!</p>
                <Link to="/doctors"> <button className="bg-yellow-700 text-white rounded-lg mt-20 lg:ml-44 ml-10  p-3 mb-3">Click To See Our Doctors</button></Link>
            </div>

            <div className="grid lg:grid-cols-3">
                {
                    services.slice(0, 3).map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div>
            <div >
                <Link to="/services"><button className="bg-gray-500 text-white rounded-lg mt-3 ml-5  p-3 mb-3 items-center">Show More Service</button></Link>
            </div>



            <div className="grid lg:grid-cols-2 px-20 py-20 my-10 bg-red-100">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p className="text-4xl pb-5">Our Patient Before after Gallery</p>
                    <p className="text-xl">We offer the entire range of dental treatments and procedures at transparent and printed prices standards for all patients.Pibs short ribs filet mignon doner pork loin. Shankle porchetta drumstick landjaeger t-bone picanha boudin kielbasa ball tip ground round</p>
                    <button className="bg-red-500 text-white  mt-20 ml-5  p-3 mb-3 items-center">View Our Gallery</button>
                </div>
            </div>

        </div >
    );
};

export default Home;

