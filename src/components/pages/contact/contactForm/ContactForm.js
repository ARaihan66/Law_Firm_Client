import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import SendMessage from "../../../../file_animation/Send_Message.json";
import Lottie from "react-lottie";
import "./contactform.css";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();
  const { name, email, subject, message } = formData;

  const defaultSendMessage = {
    loop: true,
    autoplay: true,
    animationData: SendMessage,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://law-firm-backend-sigma.vercel.app/api/contact/add", {
        name,
        email,
        subject,
        message,
      })
      .then((res) => navigate(0))
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setFormData((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="flex flex-wrap justify-center bgBlue p-10 md:p-15">
      <div className="w-[550px]">
        <h1 className="text-3xl mt-20 text-amber-500  font-bold  uppercase text-center ">
          Send us a Message
        </h1>
        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <Input
              variant="static"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
              required
            />
          </div>
          <div className="mt-8">
            <Input
              variant="static"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
              required
            />
          </div>
          <div className="mt-8">
            <Input
              variant="static"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
            />
          </div>

          <div className="mt-8">
            <Textarea
              variant="static"
              placeholder="Message"
              name="message"
              value={message}
              onChange={handleOnChange}
              className="font-mideum text-white text-[20px]"
              required
            />
          </div>
          <div className="mt-8">
            <input
              type="submit"
              className="contuct-btn px-5 py-4 md:px-[30px] md:py-[15px] lg:px-[30px] lg:py-[15px]"
              value="Send Message"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mt-10 p-10 md:mt-10 lg:mt-0  lg:ml-20 ">
          <Lottie options={defaultSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
