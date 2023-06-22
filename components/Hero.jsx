import { BsFillPeopleFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTimer } from "use-timer";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { gsap, Power3 } from "gsap";
const Hero = ({setVisible}) => {
  const [current, setCurrent] = useState(0);
  const tl = gsap.timeline();
  const title = useRef();
  const subtitle = useRef();
  const buttons = useRef();
  const additional = useRef();
  const image = useRef();
  const imageFollow = useRef();
  let imageTimeline = gsap.timeline()
  let mm = gsap.matchMedia();
  useEffect(() => {
    mm.add("(min-width: 1024px)", () => {
      imageTimeline.to(imageFollow.current, {  ease: Power3.easeOut, duration: 2, clipPath: "polygon(11% 0%, 100% 0%, 100% 100%, 0% 100%)" })
        .to(image.current, {  ease: Power3.easeOut, duration: 2, clipPath: "polygon(11% 0%, 100% 0%, 100% 100%, 0% 100%)" },"-=1.8");
    });
    mm.add("(max-width: 1023px)", () => {
      gsap.to(image.current, { opacity: 1, ease: Power3.easeOut, duration: 2, clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);" });
    });
    tl.to(title.current, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0, ease: Power3.easeOut, duration: 0.8 })
      .to(subtitle.current, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1, y: 0, ease: Power3.easeOut, duration: 0.8 })
      .to(buttons.current, { opacity: 1, y: 0, ease: Power3.inOut, duration: 0.8 })
      .to(additional.current, { opacity: 1, y: 0, ease: Power3.inOut, duration: 0.8 });
    start();
  }, []);
  const slides = [
    { ico: "/cover2.jpg", pos: "object-top", width: "564", height: "748" },
    { ico: "/demonstration.jpg", pos: "object-top", width: "1200", height: "1408" },
    { ico: "/language.jpg", pos: "object-bottom", width: "1750", height: "2184" },
    { ico: "/cover.jpg", pos: "object-center", width: "1112", height: "1280" },
    { ico: "/plane.jpeg", pos: "object-bottom", width: "1000", height: "668" },
    { ico: "/agentdescale1-z.jpg", pos: "object-top", width: "564", height: "750" },
    { ico: "/agentdescale2.jpg", pos: "object-top", width: "373", height: "280" },
    { ico: "/agentdescale3.jpg", pos: "object-top", width: "99999999", height: "9999999" },
  ];

  const length = slides.length;
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 4,
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
  const validate =(index) => {
    if(index === current || index === current+1){
      return true
    }
    else return false
  } 

  return (
    <section className=" pb-16  min-h-[80vh] lg:min-h-screen relative lg:pb-0 z-[4] bg-transparent lg:bg-white  overflow-hidden gap-8 grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 pt-20 ">
      <div data-scrollh="1" className="h-1 scrollLineH w-0 bg-main-red absolute bottom-0 z-[10]"></div>
      <div className=" h-full z-[3] lg:pb-8 lg:pl-8 lg:pr-0 px-6 sm:px-12 w-full flex flex-col pt-12 lg:pt-16">
    
        <h1 ref={title} className="text-white translate-y-6 [clip-path:_polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%);] md:text-4xl md:text-left text-center lg:text-dark-blue [font-weight:700;] uppercase text-2xl lg:text-5xl leading-10 lg:leading-[4rem] tracking-tigh">
          
          <span className="text-main-red"></span><center><Image  className="" width={400} height={600} src={"/learn.png"} /> avec votre academie </center>
          
        </h1>
        <p ref={subtitle} className="xl:text-2xl font-Martl font-Montserrat-alt translate-y-6 [clip-path:_polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%);] opacity-0 text-lg md:text-xl lg:text-dark-blue text-white text-justify leading-8 lg:leading-10  mt-8">
          Notre expertise de plus de 30 ans en matière de formation vous permet de vous préparer efficacement à une carrière passionnante dans l'industrie aérienne.
        </p>
        <div ref={buttons} className="w-full opacity-0 translate-y-3 md:justify-start justify-center mt-12 flex ">
          <button onClick={()=>setVisible(true)} className="uppercase hover:shadow-lg transition-transform duration-200 ease-out group mr-8 md:text-base text-sm md:mr-20 w-64 overflow-hidden relative  py-4 bg-main-red">
            <p className="text-white z-[3] relative">inscrivez-vous</p>
            <div className="w-full h-full bg-light-blue transition-all duration-300 ease-out group-hover:top-0 absolute top-full z-[2]"></div>
            <div className="w-3 h-3 scale-110 hidden md:block z-[3] bg-white absolute  bottom-0 left-0 [clip-path:_polygon(0_0,_0%_100%,_100%_100%);]"></div>
            <div className="w-3 h-3 scale-110 hidden md:block z-[3] bg-white  absolute ease-out top-0 right-0  [clip-path:_polygon(0_0,_100%_100%,_100%_0);]"></div>
          </button>
          <Link offset={-64} to="formations" spy={true} smooth className="secondary-button group">
            <p className=" relative group-hover:mr-2 -mr-4 lg:text-dark-blue text-white transition-all duration-300 ease-out">voir plus </p>
            <IoIosArrowDown className="lg:text-dark-blue text-white relative left-3 text-xl group-hover:opacity-100 opacity-0" />
          </Link>
        </div>
        <div ref={additional} className="w-full opacity-0  mt-16 items-center text-white lg:text-dark-blue justify-between flex">
          <div className="flex items-center xl:uppercase pl-2 justify-between">
            <BsFillPeopleFill className="md:text-3xl text-xl mr-3" />
            <p className="font-medium text-xs lg:text-xl"> +200 étudiants</p>
          </div>
          <div className="flex items-center xl:uppercase pl-2 justify-between">
            <FaBuilding className="md:text-3xl text-xl mr-3" />
            <p className="font-medium text-xs lg:text-xl"> +8 partenaires</p>
          </div>
          <div className="flex items-center xl:uppercase pl-2 justify-between">
            <FaGraduationCap className="md:text-3xl lg:text-4xl text-xl mr-3" />
            <p className="font-medium text-xs md:text-lg  lg:text-xl"> +10 formations</p>
          </div>
        </div>
       
        <br/>
      
        
        <div className="flex md:text">
            <div className="" /><center><p>Ministère des Transports<br/>DIRECTION DE L'AVIATION CIVILE ET<br/>DE LA METEOROLOGIE</p></center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image  className="card-body float-right" width={122} height={600} src={"/dacm.png"} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<center> <p>وزارة النقل <br/>مديرية الطيران المدني <br/>و الأرصاد الجوية</p></center>
          </div>
       



      </div>
      <div className="z-[1] h-screen w-full absolute top-0 backdrop-blur-sm bg-light-blue lg:hidden block bg-opacity-70"></div>
      <div className="absolute overflow-  z-[0] lg:relative w-full h-full">
        <div ref={imageFollow} className="  bg-opacity-10 bg-red-900 lg:block hidden -bottom-1 -left-1 lg:[clip-path:_polygon(100%_0%,_100%_0%,_100%_100%,_100%_100%);] absolute w-full h-full scale-[1.02]">

        </div>
      <div onClick={()=>nextSlide()} ref={image} className="h-full  [clip-path:_polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%);]  lg:[clip-path:_polygon(100%_0%,_100%_0%,_100%_100%,_100%_100%);]   w-full">
      {slides.map(
          (pic, index) =>
              index ===current && (
                <div key={index} className={`h-full w-full transition-all absolute bottom-0 fade-in    ${current === index ? "  block z-[3] " : "  block z-[2]"}`}>
                <Image priority={true} width={pic.width} height={pic.height} className={`w-full h-full  object-cover ${pic.pos}`} src={pic.ico} alt="cover pic of website" />
              </div>
              )
        )}
      </div>
      </div>
        
    </section>
  );
};

export default Hero;
