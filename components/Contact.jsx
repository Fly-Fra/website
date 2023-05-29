import { MdEmail } from "react-icons/md";
import Link from "next/link"
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  return (
    <section className="h-fit w-full text-white bg-gray-50 z-[2] grid place-items-center px-8 md:px-20 py-16">
      <div className="w-full min-h-[18rem] md:flex-row flex flex-col">
        <div className=" gap-8 order-2 md:order-1 flex flex-col justify-between w-full md:w-80 bg-main-red  p-4">
          <p className="tracking-wide font-medium text-lg text-white uppercase">nos informations</p>
          <div className="w-full text-lg items-center flex justify-between">
            <MdEmail className="text-3xl" />
            <a href="mailto:contact@flyfra.com">contact@flyfra.com</a>
          </div>
          <div className="w-full text-lg items-center flex justify-between">
            <BsFillTelephoneFill className="text-3xl" />
            <a href="tel:044179089">044 17 90 89 </a>
          </div>
          <div className="w-full text-lg items-center flex justify-between">
            <a className="transition-all duration-300 ease-out hover:scale-95" href="https://www.facebook.com/FlyFraDZ" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook className="text-4xl" />
            </a>
            <a className="transition-all duration-300 ease-out hover:scale-95" href="https://www.instagram.com/flyfra/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-4xl" />
            </a>
            <a className="transition-all duration-300 ease-out hover:scale-95" href="https://dz.linkedin.com/in/fly-fra-academy-595922b4" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
        <div data-scrolli="8" className="w-full translate-y-3 opacity-0 scrollInfo relative px-2  sm:px-8 py-4 flex flex-col sm:items-start items-center border-2 border-l-2 md:border-l-0">
          <p className="lg:text-4xl text-2xl sm:text-3xl uppercase sm:text-left text-center font-bold text-dark-blue">Contactez-nous</p>
          <p className="xl:text-2xl mb-6 md:text-base lg:text-xl mt-6 sm:text-left text-center  text-dark-blue">L'idée de participer à nos formations vous intéresse et vous souhaitez en savoir plus ? En utilisant le bouton ci-dessous, contactez notre équipe qui peut vous aider avec toutes vos questions!</p>
          <Link className="w-fit h-fit" href={"/contact"}>
            <button className="uppercase transition-transform duration-200 ease-out    group  w-40 lg:w-52 overflow-hidden relative py-2  lg:py-3 bg-main-red">
              <p className="text-white z-[3] relative">voir plus</p>
              <div className="w-full h-full bg-dark-blue transition-all duration-300 ease-out group-hover:top-0 absolute top-full z-[2]"></div>
              <div className="w-3 h-3 z-[3] scale-110 bg-white absolute  bottom-0 left-0 [clip-path:_polygon(0_0,_0%_100%,_100%_100%);]"></div>
              <div className="w-3 h-3 z-[3] scale-110 bg-white  absolute ease-out top-0 right-0  [clip-path:_polygon(0_0,_100%_100%,_100%_0);]"></div>
            </button>
          </Link>
          <img data-scrollx="1" className="absolute opacity-0 translate-x-4 scrollX bottom-0 -top-2 md:-top-3  right-6 w-40 md:w-72" src="/arrows.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
