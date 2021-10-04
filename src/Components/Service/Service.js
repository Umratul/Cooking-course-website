import React from 'react';

import './Service.css'

const Service = (props) => {
    const {  name, img, price, duration, rating,body } = props.service;

    
    return (
        <div className="bg-light border border-secondary rounded-4 container">
            <img className="h-25 w-50 img-thumbnail" src={img} alt="" />
            <h2>{name}</h2>
            <p>{body}</p>
            <h4>Price : ${price}</h4>
            <p>Course Duration:{duration}</p>
            <p>Rating : {rating}</p>     
    
  </div>

    );
};

export default Service;