import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./consultant.css";
import { MuiTelInput } from "mui-tel-input";
import { Select, Option } from "@material-tailwind/react";

const Consultant = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    selectedLawer: "",
    requestMessage: "",
  });

  const [phoneNo, setPhoneNo] = useState("");

  const handleDateOnChange = (event) => {
    const selectedDate = event.target.value;
    const minDate = getCurrentDate(); // Minimum date allowed (today)

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 15); // Date 15 days from now

    const selectedDateTime = new Date(selectedDate).getTime();
    const futureDateTime = futureDate.getTime();

    if (selectedDateTime > futureDateTime) {
      setExpectedDate(selectedDate);
    } else {
      setExpectedDate(getCurrentDate());
      event.target.blur(); // Blur the input field
    }
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectedChange = (value) => {
    setFormData({ ...formData, selectedLawer: value });
  };

  const handlePhoneChange = (newVal) => {
    setPhoneNo(newVal);
  };

  const navigate = useNavigate();

  const { name, email, subject, selectedLawer, requestMessage } = formData;

  const [expectedDate, setExpectedDate] = useState(getCurrentDate());

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(expectedDate, phoneNo);
    axios
      .post("http://localhost:8000/api/request/add", {
        name,
        email,
        subject,
        selectedLawer,
        phoneNo,
        expectedDate,
        requestMessage,
      })
      .then((result) => {
        if (result.data.success === true) navigate(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pt-20 consultant-background1">
      <div className="testimonial-commentSection mt-20 p-2 md:p-10 rounded-lg">
        <h1 className="font-semibold text-3xl uppercase text-white pb-4 text-center">
          Consult an expert Lawyer
        </h1>
        <p className="text-justify text-l text-white p-5">
          If you need consultancy via face-to-face meetings, teleconferences,
          email, or phone, or if you are unsure about the services you require,
          please fill out the form below to contact an expert lawyer. Please
          note that appointment dates must be scheduled at least 15 days from
          now. We are committed to providing you with the best and most
          well-planned solutions.
        </p>
        <form
          className="consultant-form p-4 md:w-[700px] lg:md:w-[700px]"
          onSubmit={handleSubmit}
        >
          <p className="w-[100%] text-white font-bold text-xl mt-5 mb-1">
            Name
          </p>
          <div className="flex justify-between">
            <input
              className="p-4 w-[100%]"
              type="text"
              placeholder="Type Your Name"
              value={name}
              onChange={handleOnChange}
              name="name"
            />
          </div>
          <p className="w-[100%] text-white font-bold text-xl mt-5 mb-1">
            Phone
          </p>
          <MuiTelInput
            value={phoneNo}
            name="phoneNo"
            defaultCountry="BD"
            onChange={handlePhoneChange}
            className="w-[100%] bg-white rounded"
          />

          <p className="w-[100%] text-white font-bold text-xl mt-5 mb-1">
            Email
          </p>
          <input
            className="p-4"
            type="email"
            placeholder="E-mail"
            value={email}
            name="email"
            id=""
            onChange={handleOnChange}
          />

          <p className="w-[100%] text-white font-bold text-xl mt-5 mb-1">
            Subject
          </p>
          <input
            className="p-4"
            type="text"
            placeholder="Subject"
            value={subject}
            name="subject"
            id=""
            onChange={handleOnChange}
          />

          <div>
            <p className="w-[100%] text-white font-bold text-xl mt-5 mb-3">
              Expected Date
              <span className="text-sm">
                ( Please select date at least 15 days from now)
              </span>
            </p>
            <input
              className="p-4 w-[100%]"
              type="date"
              placeholder="Select a date"
              value={expectedDate}
              min={getCurrentDate()}
              onChange={handleDateOnChange}
            />
          </div>

          <div>
            <p className="w-[100%] text-white font-bold text-xl mt-5 mb-3">
              Select a lawer
            </p>
            <select
              value={selectedLawer}
              onChange={(event) => handleSelectedChange(event.target.value)}
              className="p-7 w-[100%] mb-2 bg-gray-100 text-black rounded-md"
            >
              <option value="" disabled hidden>Select Lawer</option>
              {data &&
                data.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          <p className="w-[100%] text-white font-bold text-xl mt-5 mb-1">
            Request Message
          </p>
          <textarea
            className="p-5"
            placeholder="Request message"
            value={requestMessage}
            name="requestMessage"
            onChange={handleOnChange}
          />
          <div className="commentbtn1 ">
            <input
              className="comment-submit  p-3 w-[100%] mt-5"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consultant;
