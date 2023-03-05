import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useTimer } from "use-timer";

const Témoignage = ({ témoin }) => {
  const [current, setCurrent] = useState(0);

  const length = témoin.length;
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 6,
    timerType: "DECREMENTAL",
    autostart: true,
    endTime: 0,
    onTimeOver: () => {
      nextSlide();
    },
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    reset(time);
    start();
  };
  const changeCurrent = (i) => {
    setCurrent(i);
    reset(time);
    start();
  };
  return (
    <section className="min-h-[80vh] px-8 md:h-[80vh] max-h-screen grid grid-rows-3 place-items-center gap-y-3 ">
      <div className="flex flex-col items-center justify-center  h-full relative">
        <p data-scrolli="6" className="md:text-lg scrollInfo translate-y-2 opacity-0 text-main-red tracking-[0.2em] relative left-1 uppercase">
          pourquoi-nous?
        </p>
        <h2 data-scrolli="7" className="  lg:text-4xl scrollInfo translate-y-2 opacity-0 sm:text-left text-center  text-dark-blue [font-weight:700;] uppercase text-2xl  leading-10 lg:leading-[3rem] tracking-wide">
          Que disent nos étudiants
        </h2>
        <svg data-scrolli="8" className="relative scrollInfo translate-y-2 opacity-0  left-3 top-3 w-20 h-20" fill="none">
          <path d="M23.625 0.375L14.375 18.875H32.875V51.25H0.5V18.875L9.75 0.375H23.625ZM65.25 0.375L56 18.875H74.5V51.25H42.125V18.875L51.375 0.375H65.25Z" fill="#C31C36" />
        </svg>
      </div>
      <div className="h-full  grid place-items-center   w-full relative">
        {témoin.map((person, index) => (
          <div key={index} className={`  ${index === current ? "flex" : " hidden "} fade-inFloat  gap-y-4 items-center flex-col h-full w-full `}>
            <p className="xl:text-2xl sm:text-xl text-lg font-medium w-full md:w-[80%] xl:w-[68%] text-center">{person.text}</p>
            <div className="h-28 w-28 relative mt-4">
              <Image alt={person.name} src={person.pic.url} height={1278} width={1278} className="rounded-full hover:scale-105 transition-transform duration-300  h-full w-full object-center object-cover" />
            </div>
            <p className="text-lg relative bottom-2 font-medium">{person.name}</p>
          </div>
        ))}
      </div>
      <div  className={`grid  w-72 md:w-96 h-3 bg-gray-50  border-2 grid-rows-1 grid-flow-col`}>
        {témoin.map((person, index) => (
          <button onClick={() => changeCurrent(index)} key={index} className={`w-full transition-all duration-300 ease-out h-full focus:border-none ${index === current ? "bg-main-red" : "bg-gray-50 hover:bg-gray-200"} transition-all duration-300 ease-out border-r-gray-300 border-r-2 `}></button>
        ))}
      </div>
    </section>
  );
};

export default Témoignage;
