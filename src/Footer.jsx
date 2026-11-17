import React from "react";
import { FaGithub, FaLinkedin,FaArrowUp } from "react-icons/fa";
import { Mail } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-gray-700  hover:cursor-pointer text-white h-100 p-2 text-center">
      <div className="mt-15 ">
        <h2 className="font-bold text-3xl">Ruhani Sharma</h2>
      <p className="text-gray-400 mt-3" >Full-Stack Developer</p>
      <p className="text-gray-400 mt-3">
        Building modern and user-friendly web experiences
      </p><br></br>
      {/* Contact Links  */}
      <h2 className="font-bold">Contact with me</h2>
      <ul className="flex  justify-center gap-10 mt-5">
        <li className="hover:opacity-55">
          <a href="#">
            <FaGithub size='25'/>
          </a>
        </li>
        <li className="hover:opacity-55">
          <a href="#">
            <FaLinkedin size='25' />
          </a>
        </li>
        <li className="hover:opacity-55">
          <a href="#">
            <Mail size='25'/>
          </a>
        </li>
      </ul><br></br>
      {/* border_line */}
      <div className="border border-gray-600 w-full max-w-5xl mx-auto"></div><br></br>

      <p className="text-xs text-gray-400">&copy;{new Date().getFullYear()} RuhaniSharma | <a className="inline-flex text-white gap-1 hover:underline" href="#home"><FaArrowUp size='13'/> Back to top</a></p>
      </div>
    </div>
  );
};

export default Footer;