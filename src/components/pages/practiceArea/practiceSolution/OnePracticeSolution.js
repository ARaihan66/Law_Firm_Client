import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";
import "./practiceSolution.css";

const OnePracticeSolution = (props) => {
  const { image, name } = props.practiceslution;

  return (
    <div>
      <Link to="/destination-url">
        <div className="ml-4 mt-3 md:mt-3 solution">
          <img src={image} alt={name} className="p-1" />{" "}
          <h1 className="text-center text-xl pt-3 pb-3 font-bold solutionhover">
            {name}
          </h1>
        </div>
      </Link>
    </div>
  );
};

// Define prop types for the component
OnePracticeSolution.propTypes = {
  practiceslution: PropTypes.shape({
    image: PropTypes.string.isRequired, // Image URL is required and should be a string
    name: PropTypes.string.isRequired, // Name is required and should be a string
  }).isRequired, // practiceslution object is required
};

export default OnePracticeSolution;
