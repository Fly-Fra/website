import Image from "next/image";
import { GiGraduateCap } from "react-icons/gi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
const animateElement = (e) => {
  gsap.to(`.${e}`, {
    width: "66.66%",
    ease: Power3.easeInOut,
    duration: 0.5,
  });
};
const reverseAnimate = (e) => {
  gsap.to(`.${e}`, {
    width: "33.33%",
    ease: Power3.easeInOut,
    duration: 0.5,
  });
};

const Formations = ({ courses }) => {
  const trigger = useRef();


  return (
    <section
      ref={trigger}
      name="formations"
      className="min-h-screen pb-0  z-[4] text-dark-blue  w-full  flex flex-col"
    >
      <div className="grid gap-4 px-12 place-items-center md:grid-cols-3">
        <div className=" h-full w-full relative border-white md:col-span-3">
          {/* <div className="w-1 right-0 absolute h-full bg-white">
          </div> */}
          <div className="h-full relative pb-20 pt-12 w-full flex flex-col">
            <div className="flex flex-col relative group">
              <GiGraduateCap
                data-scrolli="1"
                className="xl:text-7xl group-hover:top-1 transition-all duration-300 ease-out opacity-0 scrollInfo translate-y-4 md:text-6xl relative top-3 left-[40%] md:left-4 text-4xl  xl:left-6 "
              />
              <h3
                data-scrolli="2"
                className="font-bold opacity-0 translate-y-6 scrollInfo md:text-4xl text-3xl md:text-left text-center xl:text-5xl uppercase tracking-wide"
              >
                Nos formations
              </h3>
            </div>
            <p
              data-scrolli="3"
              className="opacity-0 hidden md:block leading-8 lg:leading-[2.3rem] font-Montserrat-alt scrollInfo translate-y-4 lg:text-xl  text-justify  lg:w-[80%] mt-8"
            >
              Notre académie se démarque par notre engagement en faveur de la
              qualité de nos formations. Nous avons sélectionné des instructeurs
              expérimentés et qualifiés pour enseigner nos programmes mis à jour
              régulièrement avec les dernières tendances et technologies de
              l'industrie aérienne. Nous visons à offrir un environnement
              d'apprentissage stimulant et interactif pour nos étudiants. En
              choisissant notre académie, vous êtes assuré de recevoir une
              formation complète et de qualité supérieure pour réussir dans
              l'industrie aérienne.
            </p>
            <p
              data-scrolli="20"
              className="opacity-0 md:hidden leading-8 lg:leading-[2.3rem] font-Montserrat-alt scrollInfo translate-y-4 lg:text-xl  text-justify  lg:w-[80%] mt-8"
            >
              Notre académie offre des formations de qualité supérieure grâce à
              nos instructeurs expérimentés et à nos programmes mis à jour
              régulièrement. Nous visons à offrir un environnement
              d'apprentissage interactif pour nos étudiants.Optez pour notre
              académie pour un apprentissage de qualité et atteindre vos
              objectifs dans l'industrie aérienne.
            </p>
          </div>
        </div>
        {/* <img data-scrolli="4" className="md:w-full w-96 mt-12 mb-4 opacity-0 translate-y-6 scrollInfo " src="/formation.svg" alt="" /> */}
      </div>
      <div className="w-full pb-8 lg:pb-0 px-12 gap-4 z-[4] lg:gap-0 lg:px-0 lg:h-[30rem]  lg:flex-row flex-col flex">
        {courses.map((course, index) => (
          <Link
            className={`${course.slug} h-72  lg:h-full transition-all flex flex-col items-center  px-4 group   duration-1000 ease-in-out w-full delay-300 hover:delay-[0] lg:hover:w-2/3  lg:w-1/3  relative  overflow-hidden   `}
            key={index}
            href={`/nos-formations/${course.slug}`}
          >
            <div className="w-full absolute h-full">
              <Image
                alt={course.title}
                width={course.coverPicture.width}
                height={course.coverPicture.height}
                src={course.coverPicture.url}
                className="w-full aspect-video h-full pointer-events-none absolute transition-all duration-300 ease-out group-hover:scale-105 object-cover object-center"
              />
            </div>
            <div className="h-full w-full pointer-events-none group-focus:bg-opacity-80 z-[3] absolute group-hover:bg-opacity-80 group-hover:backdrop-blur-sm bg-dark-blue bg-opacity-30 transition-all duration-300 ease-out"></div>
            <div
              className={`flex pointer-events-none  group-hover:opacity-100 group-focus:delay-500 group-focus:opacity-100 transition-all lg:opacity-0  group-hover:delay-500 ease-in duration-500     justify-between w-full mt-6 z-[4] relative items-center`}
            >
              <p className="text-white  z-[4]  text-lg md:text-2xl font-bold uppercase  text-left ">
                {course.title}
              </p>
              <BsFillArrowRightCircleFill className="text-2xl z-[4] text-white" />
            </div>
            <p
              className={`text-white pointer-events-none  lg:-translate-y-3 group-focus:delay-500 group-focus:opacity-100 group-hover:opacity-100 group-hover:delay-500 ease-in transition-all duration-500 text-sm md:text-lg mt-6 font-Roboto opacity-0  z-[4] text-left`}
            >
              {course.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Formations;
