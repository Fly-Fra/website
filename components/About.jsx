import { RiPlaneFill } from "react-icons/ri";
import { gsap } from "gsap";
import { useEffect,useRef } from "react";
import Image from "next/image";
const About = () => {
  const img= useRef();
  useEffect(() => {
    gsap.to(img.current,{objectPosition:"center 70%",scale:1.1,scrollTrigger:{trigger:img.current,scrub:1}})
  }, [])
  
  return (
    <section className="min-h-screen overflow-hidden  z-[2] py-16 px-6 md:px-20 bg-light-blue bg-opacity-50 items-center flex flex-col w-full relative">
      <Image alt="background image containing a plane" src="/about.jpg" fill ref={img} className="object-cover object-center absolute h-full w-full mix-blend-multiply top-0 left-0"/>

      <div  className="w-full flex z-[3]  flex-col items-center h-fit py-8">
        <h3 data-scrolli="5" className="uppercase opacity-0 translate-y-6 scrollInfo text-3xl text-center md:text-5xl  font-bold py-16 tracking-wide text-white">Qui sommes-nous?</h3>
        <p data-scrolli="5" className="md:text-2xl opacity-0 translate-y-8 scrollInfo lg:text-3xl w-full lg:w-[70%] text-white text-center font-normal">
          Nous sommes une équipe <span className="text-[#ff8484]">d’experts</span> à votre écoute et prêts à vous <span className="text-[#ff8484]">accompagner</span> dans votre projet de carrière.
        </p>
      </div>
      <div  className="h-fit  w-full z-[3] p-1 gap-2 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3">
        <div className="flex flex-col border-2 rounded-sm border-white  py-6 px-4 bg-dark-blue min-h-[20rem] w-full">
          <div className="flex justify-between w-full items-center">
            <p className="text-white uppercase font-bold lg:text-xl xl:text-2xl">Rendre accessible</p>
            <RiPlaneFill className="text-4xl text-white" />
          </div>
          <p className="text-gray-50 mt-6 text-justify text-lg">Rendre accessible à tous notre passion pour les métiers de l’aéroportuaire grâce à nos formules à la carte qui s’adaptent selon votre rythme.</p>
        </div>
        <div className="flex flex-col border-2 rounded-sm border-white  py-6 px-4 bg-dark-blue min-h-[20rem] w-full">
          <div className="flex justify-between w-full items-start">
            <p className="text-white uppercase font-bold lg:text-xl xl:text-2xl">SUIVI continue</p>
            <svg className="w-8" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M49.7707 0C52.2847 0 54.6958 0.998695 56.4735 2.77638C58.2511 4.55407 59.2498 6.96514 59.2498 9.47917V43.0208C59.2498 45.5349 58.2511 47.9459 56.4735 49.7236C54.6958 51.5013 52.2847 52.5 49.7707 52.5H35.2165C35.7007 51.3858 35.9282 50.2046 35.9282 49.035C35.93 47.7522 35.5671 46.4953 34.8818 45.4108C34.1965 44.3264 33.2171 43.4591 32.0578 42.91C33.5847 41.4287 34.4607 39.4014 34.493 37.2742C34.5253 35.147 33.7112 33.0941 32.2298 31.5671C30.7485 30.0401 28.7212 29.1641 26.594 29.1318C24.4668 29.0996 22.4139 29.9137 20.8869 31.395C20.4458 30.0108 19.6925 28.7465 18.6852 27.6996C17.678 26.6528 16.4436 25.8514 15.0774 25.3573C13.7113 24.8632 12.2498 24.6896 10.8059 24.85C9.36205 25.0103 7.97431 25.5003 6.74984 26.2821V9.47917C6.74984 6.96514 7.74853 4.55407 9.52622 2.77638C11.3039 0.998695 13.715 0 16.229 0H49.7707ZM32.2707 8.75C31.6905 8.75 31.1341 8.98047 30.7239 9.3907C30.3136 9.80094 30.0832 10.3573 30.0832 10.9375V28.4375C30.0832 29.645 31.0632 30.625 32.2707 30.625H45.3898C45.97 30.625 46.5264 30.3945 46.9366 29.9843C47.3469 29.5741 47.5773 29.0177 47.5773 28.4375C47.5773 27.8573 47.3469 27.3009 46.9366 26.8907C46.5264 26.4805 45.97 26.25 45.3898 26.25H34.4582V10.9375C34.4582 10.3573 34.2277 9.80094 33.8175 9.3907C33.4072 8.98047 32.8508 8.75 32.2707 8.75ZM11.854 40.8333C13.5945 40.8333 15.2637 40.1419 16.4944 38.9112C17.7251 37.6805 18.4165 36.0113 18.4165 34.2708C18.4165 32.5303 17.7251 30.8612 16.4944 29.6304C15.2637 28.3997 13.5945 27.7083 11.854 27.7083C10.1135 27.7083 8.44432 28.3997 7.21361 29.6304C5.98291 30.8612 5.2915 32.5303 5.2915 34.2708C5.2915 36.0113 5.98291 37.6805 7.21361 38.9112C8.44432 40.1419 10.1135 40.8333 11.854 40.8333ZM11.854 58.3333C19.6678 58.3333 22.7915 53.7571 22.7915 49.2187C22.7915 46.2 20.6915 43.75 18.1044 43.75H5.60359C3.0165 43.75 0.916504 46.2 0.916504 49.2187C0.916504 53.7746 4.04025 58.3333 11.854 58.3333ZM31.5415 37.1875C31.5415 38.5412 31.0037 39.8395 30.0465 40.7967C29.0893 41.7539 27.791 42.2917 26.4373 42.2917C25.0836 42.2917 23.7854 41.7539 22.8281 40.7967C21.8709 39.8395 21.3332 38.5412 21.3332 37.1875C21.3332 35.8338 21.8709 34.5355 22.8281 33.5783C23.7854 32.6211 25.0836 32.0833 26.4373 32.0833C27.791 32.0833 29.0893 32.6211 30.0465 33.5783C31.0037 34.5355 31.5415 35.8338 31.5415 37.1875ZM24.0048 55.4167C25.1832 53.4917 25.7023 51.3187 25.7023 49.2187C25.6997 47.8284 25.3805 46.457 24.769 45.2083H29.2607C31.3315 45.2083 33.0115 46.9233 33.0115 49.0379C33.0115 52.2171 30.5119 55.4167 24.2615 55.4167H24.0048Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-gray-50 mt-6 text-justify text-lg">Soucieux de la qualité de nos prestations délivrées, nous apportons un suivi personnalisé en continu durant tout le déroulé pédagogique afin de vous garantir le meilleur taux de réussite.</p>
        </div>
        <div className="flex flex-col  border-2 rounded-sm border-white py-6 px-4 bg-dark-blue min-h-[20rem] w-full">
          <div className="flex justify-between w-full items-center">
            <p className="text-white uppercase font-bold lg:text-xl xl:text-2xl">expérience de qualité</p>

            <svg className="w-8" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.0002 27.083C33.8679 27.083 37.5772 28.6195 40.3121 31.3544C43.047 34.0893 44.5835 37.7986 44.5835 41.6663V59.1663H15.4168V41.6663C15.4168 37.7986 16.9533 34.0893 19.6882 31.3544C22.4231 28.6195 26.1324 27.083 30.0002 27.083ZM10.4235 35.8505C9.95933 37.4161 9.68514 39.0319 9.60683 40.663L9.5835 41.6663V59.1663H0.833496V46.0413C0.832922 43.5259 1.76108 41.0989 3.43993 39.2257C5.11878 37.3525 7.43012 36.1652 9.93058 35.8913L10.4264 35.8505H10.4235ZM49.5768 35.8505C52.1724 36.0087 54.6098 37.1512 56.3919 39.0449C58.174 40.9387 59.1664 43.441 59.1668 46.0413V59.1663H50.4168V41.6663C50.4168 39.6451 50.1252 37.6938 49.5768 35.8505ZM11.0418 18.333C12.9757 18.333 14.8304 19.1012 16.1978 20.4687C17.5653 21.8361 18.3335 23.6908 18.3335 25.6247C18.3335 27.5585 17.5653 29.4132 16.1978 30.7807C14.8304 32.1481 12.9757 32.9163 11.0418 32.9163C9.10796 32.9163 7.2533 32.1481 5.88584 30.7807C4.51839 29.4132 3.75016 27.5585 3.75016 25.6247C3.75016 23.6908 4.51839 21.8361 5.88584 20.4687C7.2533 19.1012 9.10796 18.333 11.0418 18.333ZM48.9585 18.333C50.8924 18.333 52.747 19.1012 54.1145 20.4687C55.4819 21.8361 56.2502 23.6908 56.2502 25.6247C56.2502 27.5585 55.4819 29.4132 54.1145 30.7807C52.747 32.1481 50.8924 32.9163 48.9585 32.9163C47.0246 32.9163 45.17 32.1481 43.8025 30.7807C42.4351 29.4132 41.6668 27.5585 41.6668 25.6247C41.6668 23.6908 42.4351 21.8361 43.8025 20.4687C45.17 19.1012 47.0246 18.333 48.9585 18.333ZM30.0002 0.833008C33.0944 0.833008 36.0618 2.06217 38.2497 4.2501C40.4377 6.43802 41.6668 9.40548 41.6668 12.4997C41.6668 15.5939 40.4377 18.5613 38.2497 20.7493C36.0618 22.9372 33.0944 24.1663 30.0002 24.1663C26.906 24.1663 23.9385 22.9372 21.7506 20.7493C19.5627 18.5613 18.3335 15.5939 18.3335 12.4997C18.3335 9.40548 19.5627 6.43802 21.7506 4.2501C23.9385 2.06217 26.906 0.833008 30.0002 0.833008Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-gray-50 mt-6 text-justify text-lg">Nous sommes animés par la volonté de vous transmettre notre savoir-faire avec excellence et rigueur afin de vous faire vivre une expérience de qualité au sein de notre Académie.</p>
        </div>
      </div>
      <img className="absolute top-28 w-[70%]" src="/dots.svg" alt="" />

    </section>
  );
};

export default About;
