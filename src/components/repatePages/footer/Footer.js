import React from "react";
import Lottie from "react-lottie";
import animationLocation from "../../../file_animation/Location.json";
import animationLink from "../../../file_animation/Page_link.json";
import animationContact from "../../../file_animation/Contact.json";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  const linkObj = {
    links: [
      {
        name: "Home",
        page: "/",
      },
      {
        name: "About",
        page: "/about",
      },
      {
        name: "Lawers",
        page: "/attorney",
      },
      {
        name: "Services",
        page: "/practice",
      },
      {
        name: "Terms & Conditions",
        page: "/terms-conditions",
      },
      {
        name: "Contact",
        page: "/contact",
      },
    ],
  };

  const defaultLocation = {
    loop: true,
    autoplay: true,
    animationData: animationLocation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultLink = {
    loop: true,
    autoplay: true,
    animationData: animationLink,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultContact = {
    loop: true,
    autoplay: true,
    animationData: animationContact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between mt-10 mb-10">
      <div className="mb-10 p-5 bg-orange-200 rounded-tl-3xl rounded-br-3xl w-full">
        <div className="w-[100px] mx-auto">
          <div className="flex items-center justify-center">
            <Lottie options={defaultLocation} />
          </div>
        </div>
        <h1 className="font-bold text-center text-xl text-slate-700 mr-4  text-navyblue">
          LOCATIONS
        </h1>

        <div className="mt-5 ml-3">
          <h2 className="font-bold text-l">
            Atimkhana Market (2nd floor),Azimpur road,Dhaka-1205 and{" "}
          </h2>
          <h2 className="font-bold text-l">
            20 Shekh S. Bazar, Dhaka 1205, Bangladesh
          </h2>
          <h2 className="font-bold text-l mt-2">
            Sat to Thu : 09:00 am - 02:00 pm
          </h2>
          <h2 className="font-bold text-l mt-2"> 06:00 pm - 09:00 pm</h2>
        </div>
      </div>
      <div className="mb-10 p-10 bg-orange-200 rounded-tl-3xl rounded-br-3xl w-full">
        <div className="w-[100px] mx-auto">
          <div className="flex items-center justify-center">
            <Lottie options={defaultLink} />
          </div>
        </div>
        <h1 className="font-bold text-center text-xl text-slate-700 mr-4  text-navyblue">
          QUICK LINKS
        </h1>
        <div>
          {linkObj.links?.map((l, i) => (
            <h2 key={i} className="mt-3">
              <Link to={l.page} onClick={handleClick}>
                <div className="md:ml-28">
                  <p className="mt-3 font-medium text-navyblue">{l.name}</p>
                </div>
              </Link>
            </h2>
          ))}
        </div>
      </div>
      <div className="mb-10 p-10 bg-orange-200 rounded-tl-3xl rounded-br-3xl w-full">
        <div className="w-[100px] mx-auto">
          <div className="flex items-center justify-center">
            <Lottie options={defaultContact} />
          </div>
        </div>
        <h1 className="font-bold text-center text-xl text-slate-700 mr-4  text-navyblue">
          CONTACT INFO
        </h1>
        <div className="font-bold text-l mt-5">
          <h2>CALL US </h2>
          <h3>+88 01911-382094</h3>
        </div>
        <div className="font-bold text-l mt-1">
          <h2>EMAIL </h2>
          <h3>rasmul@gmail.com</h3>
        </div>
        <div className=" font-bold text-l mt-1">
          <h2>FOLLOW US </h2>
          <div className="flex mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61558590097509&mibextid=ZbWKwL"
              className="w-[20px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafizur-rahman-921343305/"
              className="ml-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a href="/#" className="ml-3">
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
