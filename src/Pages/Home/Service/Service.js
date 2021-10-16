import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h6>{price}</h6>
            <p>{description}</p>
        </div>
    );
};

export default Service;