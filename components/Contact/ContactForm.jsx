import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import React from "react";
import { useForm } from "react-hook-form";
import { BsPerson, BsChatSquareText } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { addReply } from "../../queries";
const Form = ({ title }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    addReply({ ...data, action: "addContact", state: "new"});
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="justify-between max-w-2xl grid-rows-6 grid-cols-1 md:grid-rows-5 gap-y-12 md:gap-y-8 gap-4 md:px-4 md:p-8 grid md:grid-cols-2 h-full   items-center  w-full"
    >
      <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-700 bg-white rounded-sm flex items-center">
        <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-700 border-r-2 border-r-gray-300 grid place-items-center ">
          <BsPerson className="text-2xl text-dark-blue" />
        </div>
        <label
          htmlFor="name"
          className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-700 -top-6 font-medium text-dark-blue"
        >
          Nom et prénom
        </label>

        <input
          required
          {...register("name", { required: true })}
          className="h-full w-full pl-3 focus:outline-none  "
          placeholder="Nom et prénom"
          type="text"
          name="name"
          id=""
        />
      </div>

      <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-700 bg-white rounded-sm flex items-center">
        <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-700 border-r-2 border-r-gray-300 grid place-items-center ">
          <AiOutlineMail className="text-2xl text-dark-blue" />
        </div>
        <label
          htmlFor="email"
          className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-700 -top-6 font-medium text-dark-blue"
        >
          Email
        </label>

        <input
          required
          {...register("email", { required: true })}
          className="h-full w-full pl-3 focus:outline-none  "
          placeholder="Email"
          type="email"
          name="email"
          id=""
        />
      </div>
      <div className="w-full md:col-span-2 relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-700 bg-white rounded-sm flex items-center">
        <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-700 border-r-2 border-r-gray-300 grid place-items-center ">
          <BsChatSquareText className="text-2xl text-dark-blue" />
        </div>
        <label
          className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-700 -top-6 font-medium text-dark-blue"
          htmlFor="sujet"
        >
          Sujet
        </label>
        <input
          required
          {...register("sujet", { required: true })}
          className="h-full w-full pl-3 focus:outline-none  "
          placeholder="Sujet"
          type="text"
          name="sujet"
          id=""
        />
      </div>
      <div className="w-full row-span-2 md:col-span-2 relative h-full group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-700 bg-white rounded-sm flex items-center">
        <label
          className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-700 -top-6 font-medium text-dark-blue"
          htmlFor="num"
        >
          Message
        </label>
        <textarea
          required
          {...register("message", { required: true })}
          className="h-full resize-none w-full pt-3 pl-3 focus:outline-none  "
          placeholder="Message"
          type="text"
          name="message"
          id=""
        />
      </div>
      <div className="md:col-span-2 grid place-items-center">
        <button
          tabIndex={0}
          disabled={isSubmitSuccessful}
          type="submit"
          className="continue-application w-48 disabled:cursor-not-allowed "
        >
          <div>
            <div className="pencil"></div>
            <div className="folder">
              <div className="top">
                <svg viewBox="0 0 24 27">
                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
              </div>
              <div className="paper"></div>
            </div>
          </div>
          Envoyer
        </button>
      </div>
    </form>
  );
};

const ContactForm = () => {
  return (
    <section className="md:h-screen gap-y-12 items-center pt-28 w-full min-h-screen pb-8 flex flex-col md:grid md:grid-cols-2">
      <div className="w-full h-full grid place-items-center md:order-3 order-2 px-8 md:pt-20 pt-4 md:py-20">
        <Form />
      </div>
      <div className="flex pt-12 h-full w-full md:pl-12 pr-0 px-8 order-1 md:order-2  flex-col gap-y-8">
        <p className="text-lg text-center md:text-left text-[#474747] tracking-[0.2em] relative left-1 uppercase">
          vous avez des questions?
        </p>
        <h2 className="  md:text-4xl text-center md:text-left  xl:text-5xl text-dark-blue [font-weight:700;] uppercase text-2xl  leading-10 lg:leading-[3rem] tracking-wide">
          <span className="text-main-red">contactez</span> nous
        </h2>
        <div className="flex gap-y-8  md:gap-y-16 flex-col md:items-start items-center md:h-72">
          <div className="flex gap-y-2 md:flex-row flex-col relative left-2 group items-center gap-x-6">
            <div className="md:w-12 md:h-12 w-10  h-10   transition-all duration-300 ease-in-out group-hover:bg-main-red   group-hover:shadow-lg  bg-white outline outline-4 outline-main-red rounded-full  grid place-items-center">
              <BsFillTelephoneFill className="md:text-2xl group-hover:-translate-y-1 transition-all duration-300 ease-in-out group-hover:text-white text-light-blue" />
            </div>
            <p className="md:text-xl md:text-left text-center"><a href="tel:044179089">044 17 90 89 </a></p>
          </div>
          <div className="flex relative left-2 gap-y-2 md:flex-row flex-col group items-center gap-x-6">
            <div className="md:w-12 md:h-12 w-10  h-10   transition-all duration-300 ease-in-out group-hover:bg-main-red   group-hover:shadow-lg  bg-white outline outline-4 outline-main-red rounded-full  grid place-items-center">
              <IoLocationSharp className="md:text-2xl group-hover:-translate-y-1 transition-all duration-300 ease-in-out group-hover:text-white text-light-blue" />
            </div>
            <p className="md:text-xl md:text-left text-center">
              39, Rue Larbi Ben M'hidi, Alger Centre 16000
            </p>
          </div>
          <div className="flex relative left-2 gap-y-2 md:flex-row flex-col group items-center gap-x-6">
            <div className="md:w-12 md:h-12 w-10  h-10   transition-all duration-300 ease-in-out group-hover:bg-main-red   group-hover:shadow-lg  bg-white outline outline-4 outline-main-red rounded-full  grid place-items-center">
              <MdEmail className="md:text-2xl group-hover:-translate-y-1 transition-all duration-300 ease-in-out group-hover:text-white text-light-blue" />
            </div>
            <p className="md:text-xl md:text-left text-center"><a href="mailto:contact@flyfra.com">contact@flyfra.com</a></p>
          </div>
          <div className="w-full max-w-md text-lg items-center flex justify-center gap-x-16 md:justify-between">
            <a
              className="transition-all duration-300 ease-out hover:scale-95"
              href="https://www.facebook.com/FlyFraDZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook className="text-4xl" />
            </a>
            <a
              className="transition-all duration-300 ease-out hover:scale-95"
              href="https://www.instagram.com/flyfra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-4xl" />
            </a>
            <a
              className="transition-all duration-300 ease-out hover:scale-95"
              href="https://dz.linkedin.com/in/fly-fra-academy-595922b4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
