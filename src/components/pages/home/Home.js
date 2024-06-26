import React, { useState, useEffect } from "react";
import "./home.css";
import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.webp";
import slider3 from "../../../assets/slider3.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Introduce from "./introduces/Introduce";
import Case from "./case/Case";
import Casesolve from "./caseSolve/Casesolve";
import QuestionAns from "./QuestionOption/QuestionAns";
import Testimonial from "./Testimonial/Testimonial";
import Tax from "./tax/Tax";
import { Carousel } from "@material-tailwind/react";

const Home = () => {
  //var settings = {
  //  dots: true,
  //  autoplay: true,
  //  infinite: true,
  //  speed: 1000,
  //  slidesToShow: 1,
  //  slidesToScroll: 1,
  //};

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
      <div className="home-content relative">
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
        <div className="w-[100%]">
      <Carousel className="rounded-xl mt-2">
      <img
        src={slider1}
        alt=""
        className="w-[100%] h-[100%] md:h-[100%] object-cover image-content"
      />
      <img
        src={slider2}
        alt=""
        className="w-[100%] h-[100%] md:h-[100%] object-cover image-content"
      />
      <img
        src={slider3}
        alt=""
       className="w-[100%] h-[100%] md:h-[100%] object-cover image-content"
      />
    </Carousel>
       </div>
      </div>

      <Introduce />
      <Case />
      <Casesolve />
      <Tax/>
      <QuestionAns />
      <Testimonial />
    </div>
  );
};

export default Home;
