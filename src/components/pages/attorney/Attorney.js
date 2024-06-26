import React, { useState, useEffect } from "react";

import "./attorney.css";
import OneAttorney from "./oneattorney/OneAttorney";
import Consultant from "./consultant/consultant";

const Attorney = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/advocate/client/get",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const serviceData = await response.json();
        const { data } = serviceData;
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
      <div className="relative attorney-back Attorney-content">
        <div
          className="absolute z-20 top-5 left-2 p-2  md:top-1/3 md:left-20 md:w-[500px] 
          lg:top-1/3 lg:left-28 lg:w-[850px]"
        >
          <h1 className="text-amber-500 text-3xl mt-1 font-bold md:text-5xl lg:text-5xl lg:font-medium uppercase">
            {slogan.slice(0, visibleLetters)}
            {visibleLetters === slogan.length && (
              <span className="text-transparent">_</span>
            )}
          </h1>
        </div>
      </div>
      <div className="mx-auto my-0">
        <h1 className="text-3xl mt-20 my-10  font-bold  uppercase text-center text-navyblue">
          Meet Our Lawers
        </h1>

        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20 mt-2 mb-10">
          {data &&
            data.map((attorney, index) => <OneAttorney attorney={attorney} key={index} />)}
        </div>
      </div>
      <Consultant/>
    </div>
  );
};

export default Attorney;
