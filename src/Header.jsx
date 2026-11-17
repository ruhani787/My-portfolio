import React from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    
      <header id="home">
        {/* navbar */}
        <div className=" flex items-center h-16 w-full fixed top-0 left-0 z-50 bg-transparent text-white ">
            {/* logo */}
            <img className="h-20 w-auto bg-transparent absolute left-2 " src="./ruhanilogo.png 
            "></img>
         <nav>
             <ul className="  hidden md:flex justify-center gap-4 ml-210 font-bold  
          ">
            <li className="hover:underline">
             <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:underline">
               <Link to="/Skills">Skills</Link>
            </li>
            <li className="hover:underline">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="hover:underline">
              <Link to="/Education">Education</Link>
            </li>
             <li className="hover:underline">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
         </nav>
         {/* icon  */}
         <button className="md:hidden ml-auto hover:opacity-50">
            <Menu size={28}/>
         </button>
        </div>
      </header>
       
  );
 
};

export default Header;
