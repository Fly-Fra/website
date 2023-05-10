import Image from "next/image";
import { Link as LinkS } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
const FormationHero = () => {

  return (
    <section className="md:h-[70vh]  pt-12 aspect-square gap-8 w-full md:grid-rows-1 grid-rows-2 grid-cols-1   grid md:grid-cols-2 md:place-items-center">
      <div className="md:h-full md:px-0 px-8 h-[30rem] sm:h-96 relative xl:top-8 lg:top-3 md:top-8 top-12 2xl:top-16  md:pr-0 md:pl-8 w-full flex flex-col gap-y-3">
        <p className="text-lg text-[#474747] tracking-[0.2em] relative left-1 uppercase">agréée DACM</p>
        <h2 className="  md:text-4xl text-left  xl:text-5xl text-dark-blue [font-weight:700;] uppercase text-2xl  leading-10 lg:leading-[3rem] tracking-wide">
        
          <span className="text-main-red"><Image  className="" width={400} height={600} src={"/learn.png"} /></span>avec des formations de qualité
        </h2>
        <p className="xl:text-2xl lg:text-xl font-Martl font-Montserrat-alt   text-lg md:text-xl text-dark-blue  text-justify leading-8 lg:leading-10 mt-4 ">Optez pour des formations de qualité pour développer vos compétences et atteindre vos objectifs professionnels.</p>
        <LinkS to="formations" offset={-80} spy={true} smooth className="secondary-button group mt-2 sm:mt-8">
          <p className=" relative group-hover:mr-2 -mr-4 text-dark-blue  transition-all duration-300 ease-out">voir plus </p>
          <IoIosArrowDown className="text-dark-blue  relative left-3 text-xl group-hover:opacity-100 opacity-0" />
        </LinkS>
      </div>
      <div className="h-full px-8 lg:px-16 flex items-center justify-end ">
        <div className="h-full max-h-lg md:max-h-xl  max-w-lg md:max-w-xl lg:max-w-2xl w-full grid place-items-center relative">
          <Image alt="a picture of a beautifull  flight attendants" className="object-cover max-h-[60vh]  object-top rounded-md aspect-square relative h-full  w-full" width={2000} height={2000} src={"/flight_attendant2.png"} />
        </div>
      </div>
    </section>
  );
};

export default FormationHero;
