import React from "react";
import { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import loginBanner from '../../assets/images/login/login.svg'
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  
  const {signIn}= useContext(AuthContext);
  const location= useLocation();
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/';
  
  const handleLogin= event =>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password = form.password.value;
       
        signIn(email, password)
        .then (result=>{
          const user = result.user;
          console.log(user);   
          navigate(from, {replace: true})          
          
        })
        .catch (error => console.log(error))
        
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">          
          <img src={loginBanner} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-20">
        <h1 className="text-4xl p-5 font-bold">Login!</h1>
          <Form onSubmit={handleLogin}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">              
              <input className="btn btn-danger bg-red-500" type= "submit" value="Login" />
              <p className="text-center mt-5 font-semibold">New to car doctor? Please <Link className="text-green-600 font-bold" to='/logOut'>register</Link></p>              
            </div>            
            <SocialLogin></SocialLogin>
          </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
