import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import {FaBook} from "react-icons/fa"
const Header = ({ activePage ,setVisible}) => {
  const [navBar, setnavBar] = useState(false);
  
  return (
    <header className={`w-full  z-10 flex  gap-x-4  px-8 md:justify-between transition-all duration-300  ease-out md:items-center md:flex-row flex-col md:pt-0  pt-4  ${navBar ? "h-96 md:h-20 bg-main-red md:bg-white " : " h-20 bg-white"}  fixed top-0   shadow-md `}>
      <div className="flex relative   items-center justify-between md:w-fit w-full">
        <Link className=" md:mr-16" href={"/"}>
          <img className={`w-20  ${navBar ? "invert" : "invert-0"}  z-20 relative transition-all duration-300 ease-out hover:scale-95 object-contain`} src="/Logo.png" style={{height:115, width:180, margin:-33, left:25 }} alt="logo of flyfra" />
        </Link>
        <HiMenuAlt3 tabIndex={0} onClick={() => setnavBar(!navBar)} className={`text-3xl cursor-pointer md:hidden block active:scale-95 z-20 ${navBar ? "text-white active:text-gray-50" : "active:text-main-red text-dark-blue"}  transition-all ease-out duration-200 `} />
      </div>
      {/* mobile header */}
      <nav className={`md:hidden  ${navBar ? "h-full md:opacity-100 pointer-events-auto z-[2] mt-12" : "h-0 pointer-events-none opacity-0"} flex flex-col text-white border-t-2`}>
        <Link href={"/"}>
          <div className=" h-14 justify-between px-24 sm:px-40 text-left flex items-center w-full ">
            <AiFillHome className="text-2xl " />
            Accueil
          </div>
        </Link>
        <Link href={"/nos-formations"}>
          <div className="border-t-2 justify-between px-24 sm:px-40 text-left h-14 flex items-center w-full ">
            <FaGraduationCap className="text-2xl " />
            Formations
          </div>
        </Link>
        <Link href={"/nos-etudiants"}>
          <div className="border-t-2 justify-between px-24 sm:px-40 text-left h-14 flex items-center w-full ">
            <FaBook className="text-2xl " />
            Alumni
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="border-y-2 justify-between px-24 sm:px-40 text-left h-14 flex items-center w-full ">
            <MdMail className="text-2xl " />
            contact
          </div>
        </Link>

      </nav>
      {/* desktop header */}

      <nav className="lg:w-[70%] w-4/5 hidden md:grid grid-cols-4  h-full">
        <Link href={"/"}>
          <div className=" md:text-base text-center group items-center h-full pt-[1.8rem]  w-full flex flex-col justify-between   capitalize tracking-wider font-light text-dark-blue">
            <p>Accueil</p>
            <div className={`w-[60%] ${activePage === "/" ? "bg-main-red" : "group-hover:bg-main-red bg-transparent"}  transition-colors duration-200 ease-out h-1`}></div>
          </div>
        </Link>
        <Link href={"/nos-formations"}>
          <div className=" md:text-base text-center group items-center h-full pt-[1.8rem]  w-full flex flex-col justify-between   capitalize tracking-wider font-light text-dark-blue">
            <p>Formations</p>
            <div className={`w-[80%] ${activePage === "/nos-formations" ? "bg-main-red" : "group-hover:bg-main-red bg-transparent"} transition-colors duration-200 ease-out h-1`}></div>
          </div>
        </Link>
        <Link href={"/nos-etudiants"}>
          <div className=" md:text-base text-center group items-center h-full pt-[1.8rem]  w-full flex flex-col justify-between   capitalize tracking-wider font-light text-dark-blue">
            <p>Alumni</p>
            <div className={`w-[50%] ${activePage === "/nos-etudiants" ? "bg-main-red" : "group-hover:bg-main-red bg-transparent"}  transition-colors duration-200 ease-out h-1`}></div>
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className=" md:text-base text-center group items-center h-full pt-[1.8rem]  w-full flex flex-col justify-between   capitalize tracking-wider font-light text-dark-blue">
            <p>Contact</p>
            <div className={`w-[50%] ${activePage === "/contact" ? "bg-main-red" : "group-hover:bg-main-red bg-transparent"}  transition-colors duration-200 ease-out h-1`}></div>
          </div>

          
        </Link>
       
        
      </nav>
      <button onClick={()=>setVisible(true)} className={`justify-self-end ${setVisible ? "md:block" :"md:hidden"} hidden hover:text-secondary-red   w-48 text-main-red uppercase font-medium text-sm `}>
        inscrivez-vous
      </button>
      <div className={`w-48 h-full ${setVisible ? "hidden" :"block"}`}></div>

      
         
        
      <img className={`w-20  ${navBar ? "invert" : "invert-0"}  z-20 relative transition-all duration-300 ease-out hover:scale-95 object-contain`} src="/wiings.png" style={{height:40, width:190, marginBlock:-40, marginLeft:95 }} />
    



      {/* <nav onClick={()=> setnavBar(false) } className={`absolute  text-white  transition-all flex flex-col pt-24 duration-200 ease-out ${navBar ? "left-0" :"left-full"} h-screen w-full bg-main-red top-0 z-10`}>
          <Link href={"/"}>
              <div className="border-t-2 h-14 justify-between px-24 sm:px-40 text-left flex items-center w-full ">
              Accueil
              
              <AiFillHome className="text-2xl " />
              </div>
          </Link>
          <Link href={"/nos-formations"}>
              <div className="border-t-2 justify-between px-24 sm:px-40 text-left h-14 flex items-center w-full ">
              Formations

              <FaGraduationCap className="text-2xl " />
              </div>
          </Link>
          <Link href={"/contact"}>
              <div className="border-y-2 justify-between px-24 sm:px-40 text-left h-14 flex items-center w-full ">
              contact
              
              <MdMail className="text-2xl " />
              </div>
          </Link>
          <div className="relative h-full w-full">
          <Image width={960} height={1280} className="object-cover z-[3] h-full" src="/cover2.jpg" />
            <div className="h-full absolute top-0 w-full bg-dark-blue bg-opacity-80 z-[3]">

            </div>
          </div>
      </nav> */}
    </header>
  );
};

export default Header;
