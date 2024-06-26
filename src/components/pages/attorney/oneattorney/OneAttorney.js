import React from "react";
import { Button } from "@material-tailwind/react";
import "./oneAttorney.css";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PropTypes from 'prop-types';

const OneAttorney = ({ attorney }) => {
  const { imageUrl, name, designation, description, experience } = attorney;
  const [open, setOpen] = React.useState(false);
  const [currentAttorney, setCurrentAttorney] = React.useState(attorney);
  const modalContentRef = React.useRef(null);

  const handleClickOpen = () => {
    setCurrentAttorney(attorney);
    setOpen(true);

    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOutsideClick = (e) => {
    // Check if the click is outside the dialog
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      handleClose();
    }
  };

  React.useEffect(() => {
    // Add event listener for clicks outside the dialog
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1  md:px-0">
      <div className="attorneyshadow flex flex-col justify-between rounded-lg">
        <div className="h-[300px]">
          <img
            src={`http://localhost:8000/` + imageUrl}
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-lg"
          />
        </div>

        <div className="p-5 text-center">
          <h1 className="text-xl font-medium text-navyblue"> {name}</h1>
          <h3 className="mt-2.5 font-medium text-navyblue">{designation}</h3>
        </div>
        <div className="mb-5 px-3">
          <Button
            onClick={handleClickOpen}
            variant="gradient"
            size="md"
            className="w-[100%]"
          >
            View Advocate
          </Button>
        </div>
      </div>

      {/*<Dialog
        open={open}
        className="h-[600px] overflow-auto"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogHeader className="flex justify-center items-center">
          <div>
            <img
              src={`https://law-firm-backend-sigma.vercel.app/` + currentAttorney.imageUrl}
              alt=""
              className="w-[200px] h-[200px] object-cover"
            />
          </div>
        </DialogHeader>

        <DialogBody ref={modalContentRef} className="top-scroll">
          <div className="p-5 text-center ">
            <h1 className="text-2xl font-bold text-navyblue">
              {" "}
              {currentAttorney.name}
            </h1>
            <h3 className="mt-2.5 font-medium text-navyblue">
              {currentAttorney.designation}
            </h3>
            <h3 className="mt-2.5 font-medium text-navyblue">
              {currentAttorney.experience}
            </h3>
            <h3 className="mt-2.5 mb-2.5 text-2xl font-bold text-navyblue">
              About {currentAttorney.name}
            </h3>
            <h3 className="mt-2.5 font-medium text-navyblue text-justify">
              {currentAttorney.description}
            </h3>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>*/}
    </div>
  );
};

OneAttorney.propTypes = {
  attorney: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
  }).isRequired,
};

export default OneAttorney;
