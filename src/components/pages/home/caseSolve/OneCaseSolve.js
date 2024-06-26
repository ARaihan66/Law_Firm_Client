import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import PropTypes from "prop-types";

const OneCaseSolve = (props) => {
const { numeric, achievement, operation } = props.solvecase
const [counterOn, setCounter] = useState(false)
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className='employw-card mb-8'>
        <h1 className='text-center font-bold text-4xl'>
          {counterOn && (
            <CountUp start={0} end={numeric} duration={3} delay={0}></CountUp>
          )}
          {operation}+
        </h1>
        <p className='text-center font-bold text-xl mt-3'>{achievement}</p>
      </div>
    </ScrollTrigger>
  )
}

OneCaseSolve.propTypes = {
  solvecase: PropTypes.shape({
    numeric: PropTypes.number.isRequired,
    achievement: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
  }).isRequired,
};

export default OneCaseSolve