import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import "./practice.css";

const OnePractice = (props) => {
  const { service_type, service_description } = props.practiceArea;
  return (
    <div className="mt-10 bg-gray-100 p-3 mx-2 rounded-md shadow-lg">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="practice md:ml-[20px] lg:ml-[20px]">
          <h1 className="text-[22px] font-medium ">{service_type}</h1>
          <p className="text-gray-600 mt-1 text-justify">
            {service_description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Define propTypes for the component
OnePractice.propTypes = {
  practiceArea: PropTypes.shape({
    service_type: PropTypes.string.isRequired,
    service_description: PropTypes.string.isRequired
  }).isRequired
};

export default OnePractice;
