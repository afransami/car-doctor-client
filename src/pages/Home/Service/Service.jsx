import React, { useEffect, useState } from 'react';
import SevicesCard from './SevicesCard';

const Service = () => {
    const [services, setSevices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then (data=> setSevices(data));
    },[])
    return (
        <div className='text-center my-20'>
            <p className='text-orange-500 font-bold text-2xl' >Service</p>
            <h1 className='text-5xl font-bold'>Our Service Area</h1>
            <p className='mt-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            <div className='grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 mt-10 gap-6  text-left'>
                {
                   services.map(service => <SevicesCard
                   key={service._id}
                   service={service}
                   >
                   </SevicesCard>)
                   }
            </div>
        </div>
    );
};

export default Service;