import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  return (
    <div className="px-5">
      {/* <h3 className="text-3xl">Name: {title}</h3>
      <p className="text-xl">Price: ${price}</p>
      <img className="w-1/3" src={img} alt="" /> */}

      
            <div className="card-body">
            <h1 className="text-5xl text-center font-bold">Submit Orders</h1>                    
              <form className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                    

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                </div>
              </form>
              <div className="form-control mt-6">                
                <input  className="btn btn-block btn-primary" type="submit" value="Order confirm" />                
              </div>
            </div>
          </div>
  );
};

export default CheckOut;
