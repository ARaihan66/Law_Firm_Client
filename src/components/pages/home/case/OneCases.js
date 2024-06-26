import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const OneCases = (props) => {
  const { pic, name, btnName, to } = props.onecase;

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-10 mb-10 onecasecardo lg:ml-6 w-[400px] lg:w-[400px]">
      <img src={pic} alt="" className="w-[100px] h-[100px] mx-auto my-0" />
      <h1 className="text-center font-semibold text-2xl mt-6">{name}</h1>
      <div className="mx-auto my-0 w-[200px] mt-6">
        <button className="case-btn  ml-8" onClick={handleClick}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

// Define propTypes for the component
OneCases.propTypes = {
  onecase: PropTypes.shape({
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
};

export default OneCases;
