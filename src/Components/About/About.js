import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
            <h1 className="bg-danger fst-italic p-3">About Us <FontAwesomeIcon icon={faUserCircle} /></h1>
            <h2 className="text-danger fw-bolder">Cooking Studio</h2>
            <div className="text-start m-5">
            <ul>
                <li>You will get all the supports to be a better chef.</li>
                <li>We have 10+ batches to support you.</li>
                <li>After finishing the course a certificate wiil be provided.</li>
                
            </ul>
            </div>
        </div>
    );
};

export default About;