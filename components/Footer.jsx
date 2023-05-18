import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { AiOutlineCopyright } from "react-icons/ai";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" justify-between gap-y-12 relative items-center flex flex-col px-4 sm:px-8 md:px-20 pt-12 py-4 z-[2] w-full  bg-dark-blue">
      <div className="w-full gap-y-6 sm:flex-row flex-col flex justify-between sm:items-center">
        <nav className="md:w-[40rem] order-2 sm:order-1 w-full px-2 sm:w-[70%]  flex justify-between sm:mr-12 items-center  h-full">
          <Link href={"/"}>
            <p className="lg:text-lg w-fit text-xs sm:text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 md:text-base text-center  h-full    flex flex-col justify-between   capitalize tracking-wider font-light text-white">Accueil</p>
          </Link>
          <Link href={"/nos-formations"}>
            <p className="lg:text-lg w-fit text-xs sm:text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 md:text-base text-center  h-full    flex flex-col justify-between   capitalize tracking-wider font-light text-white">formations</p>
          </Link>
          <Link href={"/nos-etudiants"}>
            <p className="lg:text-lg w-fit text-xs sm:text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 md:text-base text-center  h-full    flex flex-col justify-between   capitalize tracking-wider font-light text-white">Alumni</p>
          </Link>
          <Link href={"/contact"}>
            <p className="lg:text-lg w-fit text-xs sm:text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 md:text-base text-center  h-full    flex flex-col justify-between   capitalize tracking-wider font-light text-white">Contact</p>
          </Link>
        </nav>
        <Link className="order-1 sm:order-2" href={"/"}>
          <img  className={`md:w-24 sm:w-16 w-16 invert z-20 relative transition-all duration-300 ease-out hover:scale-95  `} src="/Logo-black.png" alt="logo of flyfra" />
        </Link>
      </div>
      <div className="grid grid-cols-2   md:grid-cols-3 w-full h-full">
        <div className="col-span-2 flex flex-col gap-y-8 sm:flex-row md:flex-col ">
          <div className="flex flex-col md:justify-between ">
            <p className="md:text-2xl text-lg lg:text-3xl 2xl:text-4xl flex items-center uppercase font-bold text-white">
              <IoLocationSharp className="text-main-red mr-4 " /> trouvez nous
            </p>
            <p className="md:text-lg text-sm 2xl:text-xl ml-12 mt-4 text-white">39, Rue Larbi Ben M'hidi, Alger Centre 16000</p>
          </div>
          <div className="flex flex-col md:justify-between md:mt-16">
            <p className="md:text-2xl text-lg lg:text-3xl 2xl:text-4xl flex items-center uppercase font-bold text-white">
              <GoPerson className="text-main-red mr-4 " /> contact
            </p>
            <p className="md:text-lg text-sm 2xl:text-xl flex items-center ml-12 mt-4 md:mt-6 text-white">
              <svg className="w-6 mr-4" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.575 33.5C32.125 33.5 32.5833 33.3167 32.95 32.95C33.3167 32.5833 33.5 32.125 33.5 31.575V24.15C33.5 23.7222 33.3625 23.3476 33.0875 23.0262C32.8125 22.7059 32.4611 22.5 32.0333 22.4083L25.7083 21.125C25.2806 21.0639 24.8448 21.1018 24.4012 21.2387C23.9587 21.3768 23.6 21.5833 23.325 21.8583L19.0167 26.1667C16.6944 24.7611 14.5708 23.0958 12.6458 21.1708C10.7208 19.2458 9.11667 17.1833 7.83333 14.9833L12.2333 10.4917C12.5083 10.2167 12.6843 9.90317 12.7613 9.55117C12.8371 9.20039 12.8444 8.81111 12.7833 8.38333L11.5917 1.96667C11.5306 1.53889 11.3319 1.1875 10.9958 0.9125C10.6597 0.6375 10.2778 0.5 9.85 0.5H2.425C1.875 0.5 1.41666 0.683333 1.05 1.05C0.683331 1.41667 0.5 1.875 0.5 2.425C0.5 6.36667 1.37878 10.2087 3.13633 13.9512C4.89267 17.6948 7.21489 21.0101 10.103 23.897C12.9899 26.7851 16.3046 29.1073 20.047 30.8637C23.7907 32.6212 27.6333 33.5 31.575 33.5Z"
                  fill="white"
                />
              </svg>
              044 17 90 89 
            </p>
            <p className="md:text-lg text-sm 2xl:text-xl flex items-center ml-12 mt-4 text-white">
              <svg className="w-6 mr-4" width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.8414 0.768555H3.7684C1.90713 0.768555 0.401198 2.29141 0.401198 4.15268L0.384277 24.4574C0.384277 26.3187 1.90713 27.8415 3.7684 27.8415H30.8414C32.7026 27.8415 34.2255 26.3187 34.2255 24.4574V4.15268C34.2255 2.29141 32.7026 0.768555 30.8414 0.768555ZM30.8414 7.5368L17.3049 15.9971L3.7684 7.5368V4.15268L17.3049 12.613L30.8414 4.15268V7.5368Z"
                  fill="white"
                />
              </svg>
              contact@flyfra.com
            </p>
          </div>
        </div>
        <div className="w-full md:block hidden h-full">
          <Image alt="map location of flyfra" className="object-cover rounded-md  object-center" src={"/map.jpg"} width={3244} height={2768} />
        </div>
      </div>
      <div className="w-full h-16 gap-x-8 flex items-center justify-between border-t-2 py-1 border-white">
        <p className="flex items-center text-white text-xs md:text-lg">
          <AiOutlineCopyright className="mr-4 text-xl" /> 2014 Fly Fra Academy. All Rights Reserved
        </p>
        <div className="lg:w-60 w-40 flex text-white items-center justify-between">
          <a className="transition-all duration-300 ease-out hover:scale-95" href="https://www.facebook.com/FlyFraDZ" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className="md:text-4xl text-2xl" />
          </a>
          <a className="transition-all duration-300 ease-out hover:scale-95" href="https://www.instagram.com/flyfra/" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="md:text-4xl text-2xl" />
          </a>
          <a className="transition-all duration-300 ease-out hover:scale-95" href="https://dz.linkedin.com/in/fly-fra-academy-595922b4" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="md:text-4xl text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
