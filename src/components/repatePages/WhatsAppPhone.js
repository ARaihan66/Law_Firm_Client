import React from "react";
import Phone from "../../file_animation/phone.json";
import Whatsapp from "../../file_animation/whatsapp.json";
import Lottie from "react-lottie";

const WhatsAppPhone = () => {
  const defaultWhatsApp = {
    loop: true,
    autoplay: true,
    animationData: Whatsapp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultPhone = {
    loop: true,
    autoplay: true,
    animationData: Phone,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="px-4">
      <div className="flex justify-between ">
        <div className="block md:hidden">
          <a href="tel:+8801911382094" target="blank" alt="phone">
            <div className="w-[60px] h-[60px] rounded-full">
              <Lottie options={defaultPhone} />
            </div>
          </a>
        </div>
        <div>
          <a
            href="http://wa.me/+8801911382094"
            target="blank"
            rel="noopener noreferrer"
            alt="whatsApp"
          >
            <div className="w-[60px] h-[60px] rounded-full">
              <Lottie options={defaultWhatsApp} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPhone;
