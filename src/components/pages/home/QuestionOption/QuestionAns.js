import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// Add PropTypes validation for id and open props
Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number,
};

const QuestionAns = () => {
  const [open, setOpen] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/faq/client/get`,
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

  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center font-bold md:font-bold lg:font-bold text-navyblue uppercase">
        Frequently Asked Questions
      </h1>

      <div className=" md:px-0 mt-10">
        {data &&
          data.map((faq, index) => (
            <React.Fragment key={index}>
              <Accordion
                open={open === index}
                icon={<Icon id={index} open={open} />}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(index)}
                  className={`border-b-0 transition-colors ${
                    open === index ? "text-blue-500 hover:!text-blue-700" : ""
                  }`}
                >
                  {faq.question}
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                  <p className="single-Question-Hover p-2 text-[18px]">
                    {faq.answer}
                  </p>
                </AccordionBody>
              </Accordion>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default QuestionAns;
