import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Prérequis = () => {
  gsap.registerPlugin(ScrollTrigger);
  const img = useRef();
  useEffect(() => {
    gsap.to(img.current, { objectPosition: "center 20%", scale: 1.1, scrollTrigger: { trigger: img.current, scrub: 1 } });
  }, []);
  return (
    <section className="grid  mb-16 px-8  md:h-[70vh] md:grid-rows-1 grid-rows-2 grid-cols-1 md:grid-cols-2">
      <div className="h-full bg-light-blue md:rounded-tr-none rounded-bl-none   rounded-t-lg md:rounded-l-lg relative  w-full">
        <Image  alt="a texture" fill className="h-full  absolute top-0 opacity-70 w-full object-center object-cover mix-blend-multiply" src={"/Texture.png"} />
        <div className="h-full w-full px-8  sm:px-16 relative z-[3] py-12 gap-4 flex flex-col">
          <p data-scrolli="10" className="md:text-lg text-secondary-red scrollInfo translate-y-2 opacity-0  tracking-[0.2em] relative left-1 uppercase">
            prérequis
          </p>
          <p data-scrolli="11" className="  lg:text-5xl scrollInfo translate-y-2 opacity-0 text-left   text-white [font-weight:700;] uppercase text-2xl  leading-10 lg:leading-[3rem] tracking-wide">
            générale
          </p>
          <ul className="relative pl-12 flex flex-col gap-y-12 mt-12">
            <svg data-scrollx className="h-full  opacity-70 scrollX -left-2   w-8 absolute" viewBox="0 0 38 282" fill="none">
              <path d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM1.2072 19C1.2072 28.8267 9.17331 36.7928 19 36.7928C28.8267 36.7928 36.7928 28.8267 36.7928 19C36.7928 9.17331 28.8267 1.2072 19 1.2072C9.17331 1.2072 1.2072 9.17331 1.2072 19Z" fill="white" />
              <circle cx="19" cy="19" r="13" fill="white" />
              <path d="M38 141C38 151.493 29.4934 160 19 160C8.50659 160 0 151.493 0 141C0 130.507 8.50659 122 19 122C29.4934 122 38 130.507 38 141ZM1.2072 141C1.2072 150.827 9.17331 158.793 19 158.793C28.8267 158.793 36.7928 150.827 36.7928 141C36.7928 131.173 28.8267 123.207 19 123.207C9.17331 123.207 1.2072 131.173 1.2072 141Z" fill="white" />
              <circle cx="19" cy="141" r="13" fill="white" />
              <path d="M38 263C38 273.493 29.4934 282 19 282C8.50659 282 0 273.493 0 263C0 252.507 8.50659 244 19 244C29.4934 244 38 252.507 38 263ZM1.2072 263C1.2072 272.827 9.17331 280.793 19 280.793C28.8267 280.793 36.7928 272.827 36.7928 263C36.7928 253.173 28.8267 245.207 19 245.207C9.17331 245.207 1.2072 253.173 1.2072 263Z" fill="white" />
              <circle cx="19" cy="263" r="13" fill="white" />
              <path d="M19 37.5V122C19 122.588 21.5 123 22.5 123M19 244.5V159.5L24 159L28.5 157L33.5 152.5L35.5 149L37 145.5L37.5 139.5L35.5 132.5L33.5 129.5L29.5 126C28.5 125.333 28.4 125.4 28 125C27.7448 124.745 25.1257 123.417 23 123M22.5 123C23.5 123 22.5777 122.917 23 123M22.5 123H23" stroke="white" strokeWidth="0.8" />
            </svg>

            <li data-scrolli="12" className="list-item scrollInfo translate-y-2 opacity-0  list-inside text-white lg:text-xl">
              Avoir 18 ans au minimum
            </li>
            <li data-scrolli="13" className="list-item scrollInfo translate-y-2 opacity-0  list-inside text-white lg:text-xl">
              Niveau terminal ou plus
            </li>
            <li data-scrolli="14" className="list-item scrollInfo translate-y-2 opacity-0  list-inside text-white lg:text-xl">
              Avoir un bon niveau d’anglais
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full rounded-b-lg rounded-r-none md:rounded-bl-none md:rounded-r-lg  overflow-hidden relative w-full">
        <Image ref={img} alt={"a picture of a group of planes"} width={1024} height={1024} className="h-full rounded-b-lg rounded-r-none md:rounded-bl-none md:rounded-r-lg max-h-96 md:max-h-full   w-full object-cover " src={"/planes.png"} />
      </div>
    </section>
  );
};

export default Prérequis;
