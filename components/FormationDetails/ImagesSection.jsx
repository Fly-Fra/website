import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useTimer } from "use-timer";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const ImagesSection = ({ Images }) => {
  const [current, setCurrent] = useState(0);
  const [parent] = useAutoAnimate();
  const length = Images.length;
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 3,
    timerType: "DECREMENTAL",
    autostart: true,
    endTime: 0,
    onTimeOver: () => {
      nextSlide();
    },
  });
  const firstImages = Images.filter((image, index) => {
    if (index <= 6) {
      return image;
    }
    return false;
  });
  const nextSlide = () => {
    setCurrent(current === length - 2 ? 0 : current + 1);
    reset(time);
    start();
  };
  // const changeCurrent = (i) => {
  //   setCurrent(i);
  //   reset(time);
  //   start();
  // };
  return (
    <div className="md:h-[40rem]  gap-y-4 min-h-[80vh] overflow-hidden flex flex-col relative p-8 w-full bg-light-blue">

      <div
        ref={parent}
        className="grid md:max-h-[34rem]  grid-cols-2 relative  md:grid-cols-5 h-full w-full gap-4 md:gap-8 grid-rows-4 md:grid-rows-2"
      >
        {firstImages.map((pic, index) => (
          <div
            className={`h-full scale-95 md:max-h-min max-h-[60vh] overflow-hidden fade-in inset-0 relative  w-full rounded-md ${
              index === current
                ? " md:col-end-3  md:col-start-1 h-full sm:col-span-1 col-start-2 md:row-start-1 md:min-h-[30rem] md:row-end-3 "
                : "sm:col-span-1 col-span-2 md:h-full  h-64 md:min-h-[15rem] "
            }  `}
            key={index}
          >
            <Image
              className="h-full w-full object-cover bg-light-blue shadow-md relative inset-0 hover:scale-105 transition-all duration-300 ease-out  object-center"
              src={pic.url}
              width={pic.width}
              height={pic.height}
              alt="descriptive image of the course"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesSection;
