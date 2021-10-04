
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'
const Home = () => {
    const [services, setServices] = useState([]);
        useEffect(() => {
            fetch('https://raw.githubusercontent.com/Umratul/Cooking-class-api/main/data/data.JSON')
                .then(res => res.json())
                .then(data => setServices(data));
        }, [])
    const sliceService = services.slice(0, 3);
    return (
        <div>
            <div className="title-section p-3">
            
                <div>
                    <h2>Enjoy Cooking with <span className='text-danger'>Cooking Studio</span> </h2>
                    <p>Helping you to be a chef at your own house...</p>
                </div>
                
            </div>

            <div>
                <h1 className="text-primary">Our Cooking Classes</h1>
                
            <div className="service-container">
                {
                    sliceService.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                    }
                </div>
                
            </div>

        </div>
    );
};

export default Home;