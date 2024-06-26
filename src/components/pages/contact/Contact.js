import React, { useState, useEffect } from "react";
import "./contact.css";
import ContactForm from "./contactForm/ContactForm";
import MapOne from "./locationOne/mapOne";
import MapTwo from "./locationTwo/mapTwo";
const Contact = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const slogan =
    "Our progress with yesterday's experience, today's reality and tomorrow's plan.";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prevVisibleLetters) => prevVisibleLetters + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="relative contact-back contact-content">
        <div
          className="absolute z-20 top-5 left-2 p-2 md:top-1/3 md:left-20 md:w-[500px] 
          lg:top-1/3 lg:left-28 lg:w-[850px]"
        >
          <h1 className="text-amber-500 text-3xl mt-1 font-bold md:text-5xl lg:text-5xl lg:font-medium uppercase">
            {slogan.slice(0, visibleLetters)}
            {visibleLetters === slogan.length && (
              <span className="text-transparent">_</span>
            )}
          </h1>
        </div>
        <div className="absolute z-10 top-0 h-[100%] w-full bg-black/80"></div>
      </div>
      <ContactForm />
      <div className="">
       <div>
       <h1 className="text-3xl mt-10 mb-5 text-amber-500  font-bold  uppercase text-center ">
          OUR HEADQUATER LOCATION
        </h1>
        <MapOne />
       </div>
       <div>
       <h1 className="text-3xl mt-10 mb-5 text-amber-500  font-bold  uppercase text-center ">
          OUR SECOND OFFICE LOCATION
        </h1>
        <MapTwo />
       </div>
      </div>
    </div>
  );
};

export default Contact;
