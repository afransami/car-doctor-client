import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CheckOut = () => {

    const {user}= useContext(AuthContext)
    const service = useLoaderData();
    const { title, _id, price, img } = service;

    const handleCheckOut = event=>{
        event.preventDefault ();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking= {
            customerName: name, email, date, img,
            service_id: _id,
            service: title,
            price: price
         }   
         console.log(booking);

         fetch('https://car-doctor-server-orpin-sigma.vercel.app/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
         })
         .then (res => res.json())
         .then (data=> {
            console.log(data);
            if(data.insertedId){
                alert('successfully added')
            }
         })
        }
  
  
  return (
    <div className="px-5">   
            <div className="card-body">
            <h1 className="text-5xl text-center font-bold"> Service Category: {title}</h1>                    
              <form onSubmit={handleCheckOut}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                    

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    placeholder="date"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name= "email"
                    placeholder="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due Amount</span>
                  </label>
                  <input
                    type="text"
                    name= "amount"
                    defaultValue={'$ '+ price}
                    className="input input-bordered"
                  />
                </div>
                </div>
                <div className="form-control mt-6">                
                <input  className="btn btn-block btn-primary" type="submit" value="Order confirm" />                
              </div>
              </form>
              
            </div>
          </div>
  );
};

export default CheckOut;
