import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20 rounded-2xl bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl right-12 -bottom-5  border-4 border-white absolute "
          />
        </div>
        <div className="lg:w-1/2 space-y-5 px-2">
          <p className="text-orange-500 font-bold text-2xl">About Us</p>
          <h1 className="text-5xl font-bold w-3/4">
            We are qualified & of experience in this field
          </h1>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-500">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
