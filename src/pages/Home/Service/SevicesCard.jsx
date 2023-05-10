import React from "react";
import { Link } from "react-router-dom";

const SevicesCard = ({service}) => {
    const {img, title, price}=service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img 
          src={img}
          alt=""
          className="h-auto"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to='/'><button className="btn btn-circle">❯</button></Link>          
        </div>
      </div>
    </div>
  );
};

export default SevicesCard;
