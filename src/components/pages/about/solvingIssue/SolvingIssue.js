import React from "react";
import mustafizur from "../../../../assets/Mustafizur.jpeg";

import "./solving.css";
const SolvingIssue = () => {
  return (
    <div className="flex justify-around flex-wrap md:flex-nowrap items-center md:px-0 md:py-5">
      <div className="mt-6 md:mt-6">
        <img src={mustafizur} alt="" className="rounded-lg h-[80vh] w-[90vw]" />
      </div>
      <div className="md:ml-10 my-5">
        <h1 className="text-2xl text-center mt-2 font-bold md:font-bold lg:font-bold text-navyblue uppercase">
          The Message from the Head of Chambers
        </h1>
        <p className="text-justify mt-4">
          As the Head of Chambers, I am honored to have dedicated over two
          decades to the practice of law, striving tirelessly to uphold
          excellence in our field. Together with our exceptional team of
          Barristers, Advocates, and staff under my close supervision, we have
          cultivated a reputation for delivering top-tier legal services.
        </p>

        <p className="text-justify mt-4">
          I invite you to join us on this journey of excellence as we push the
          boundaries of what is possible in the legal sector. As a leading law
          firm in Bangladesh, our commitment to providing exceptional legal
          services is unwavering. With us, you will have a dedicated and
          experienced team working tirelessly to ensure your legal needs are met
          with the utmost professionalism and skill.
        </p>
        <p className="text-justify mt-4">
          At our firm, we believe in fostering strong client relationships built
          on trust and integrity. Your satisfaction and success are our
          priorities, and we are committed to achieving the best possible
          outcomes for every client we serve. Join us and experience the
          difference of working with a law firm that is passionate about
          exceeding expectations and delivering results.
        </p>
      </div>
    </div>
  );
};

export default SolvingIssue;
