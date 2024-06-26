import React, { useState, useEffect } from "react";
import "./practice.css";
import OnePractice from "./OnePractice";
import PracticeSolution from "./practiceSolution/PracticeSolution";
import ExpertLawer from "./expertLawer/ExpertLawer";
const Practice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/practice/client/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

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
      <div className="practice-back relative practice-content">
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
      <div className=" mx-auto my-0  lg:w-full">
        <div className="mt-20">
          <h1 className="text-3xl text-center mt-4 font-bold md:font-bold lg:font-bold text-navyblue uppercase">
            OUR PRACTICE AREA
          </h1>
          <p className="text-gray-800 my-10 px-4 text-justify">
            Mustafizur Rahman & Associates is one of the Intellectual Property
            Law Firm in Bangladesh provides full intellectual property service,
            specifically, in the field of IP protection, enforcement relating to
            Patent, Trademark, Copyrights and other intellectual property
            rights. It is our commitment to good values that makes Mustafizur
            Rahman & Associates a reliable and professional intellectual
            property service provider. We have a group of professional team
            members who have extensive experiences and knowledge in field of
            intellectual property. We’re proud that our law firm offers world
            class legal services for a nationwide affordable pricing! our
            service is premium, but our pricing is budget friendly and
            reasonable. With us you’ll never feel like the lawyers are just
            robbers in suits, besides, we win 80% of all cases. So, with us,
            your chances of winning are as high as they possibly can be! We
            believe that quality should be affordable but not overcharged.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-y-28 md:mt-20">
            {data && data.map((practiceArea, i) => (
              <OnePractice key={i} practiceArea={practiceArea} />
            ))}
          </div>
        </div>
      </div>
      <PracticeSolution />
      <ExpertLawer />
    </div>
  );
};

export default Practice;
