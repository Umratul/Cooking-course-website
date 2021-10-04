import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css';

const Services = () => {
        const [services, setServices] = useState([]);
        useEffect(() => {
            fetch('https://raw.githubusercontent.com/Umratul/Cooking-class-api/main/data/data.JSON')
                .then(res => res.json())
                .then(data => setServices(data));
        }, [])
    return (
        <div>
             <h2 className="bg-danger p-3">Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;