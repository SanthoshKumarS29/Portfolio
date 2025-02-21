import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";

const Contact = () => {
  const urls = {
    Linkedin: "https://www.linkedin.com/in/sk-fdev",
    Github: "https://github.com/SanthoshKumarS29",
    Whatsapp: "https://wa.me/9751093403"
  };

  return (
    <div id="Contact">
      <div className="max-w-[1240px] mx-auto py-16 px-4 text-white">
        <div className="shadow-lg p-6 rounded-lg mb-10">
          <h3 className="text-2xl text-center font-semibold text-[#7a50eb]">
            Get In Touch
          </h3>
          <div className="flex justify-center py-8 font-semibold cursor-pointer">
            <a href="mailto:santhoshvk090@gmail.com">
              <p className="flex gap-3 border p-2 rounded-md scale-100 hover:scale-125 hover:border-[#7a50eb] duration-300 ease-in-out">santhoshvk090@gmail.com <span><IoMailUnreadOutline className="text-2xl hover:text-[#7a50eb] duration-300 ease-in"/></span></p>
            </a>
          </div>
          <div className="flex space-x-4 justify-center">
            <a href={urls.Linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
            </a>
            <a href={urls.Github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
            </a>
            <a href={urls.Whatsapp} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white text-3xl hover:text-[#7a50eb] duration-300 ease-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
