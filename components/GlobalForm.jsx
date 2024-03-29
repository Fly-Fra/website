import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsPerson, BsCalendar2Date, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrAidOption } from "react-icons/gr";
import { addReply } from "../queries";

const GlobalForm = ({ visibile, setVisible, formations }) => {
  const resetForm = () => {
    setVisible(false);
    reset({
      data: "",
    });
  };
  const [opacity, setopacity] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    addReply({ ...data, action: "addSub", state: "new" });
  };
  useEffect(() => {
    let timeout;
    if (isSubmitSuccessful) {
      setopacity(true);
      timeout = setTimeout(() => resetForm(), 1000);
    }
    return () => clearTimeout(timeout);
  }, [isSubmitSuccessful]);

  return (
    <div
      className={`h-full w-full px-4 transition-all duration-200 ease-out fixed top-0 z-10 left-0 ${
        visibile ? "grid" : "hidden"
      }  place-items-center`}
    >
      <div
        onClick={() => setVisible(false)}
        className="absolute h-full w-full top-0 left-0   bg-dark-blue bg-opacity-60 backdrop-blur-sm "
      ></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-[11] fade-inFloat  h-[80vh]  justify-between rounded-lg shadow-xl px-4 p-8 max-w-lg  flex flex-col items-center bg-light-blue w-full "
      >
        <p className="uppercase text-2xl text-white font-bold">
          pre-inscription
        </p>
        <div className="flex flex-col gap-y-4 justify-between items-center w-full max-w-sm  h-96">
          <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-300 bg-white rounded-sm flex items-center">
            <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-300 border-r-2 border-r-gray-300 grid place-items-center ">
              <BsPerson className="text-2xl text-dark-blue" />
            </div>
            <label
              htmlFor="name"
              className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-300 -top-6 font-medium text-white"
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
          <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-300 bg-white rounded-sm flex items-center">
            <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-300 border-r-2 border-r-gray-300 grid place-items-center ">
              <BsCalendar2Date className="text-2xl text-dark-blue" />
            </div>
            <label
              htmlFor="birthday"
              className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-300 -top-6 font-medium text-white"
            >
              Date de naissance
            </label>

            <input
              required
              {...register("birthday", { required: true })}
              className="h-full w-full pl-3 peer  xl:[&::-webkit-calendar-picker-indicator]:pl-40  focus:outline-none  "
              placeholder="Date"
              type="date"
              name="birthday"
              id=""
            />
          </div>
          <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-300 bg-white rounded-sm flex items-center">
            <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-300 border-r-2 border-r-gray-300 grid place-items-center ">
              <AiOutlineMail className="text-2xl text-dark-blue" />
            </div>
            <label
              htmlFor="email"
              className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-300 -top-6 font-medium text-white"
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
          <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-300 bg-white rounded-sm flex items-center">
            <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-300 border-r-2 border-r-gray-300 grid place-items-center ">
              <BsTelephone className="text-2xl text-dark-blue" />
            </div>
            <label
              className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-300 -top-6 font-medium text-white"
              htmlFor="num"
            >
              Numéro du telephone
            </label>
            <input
              required
              {...register("num", { required: true })}
              className="h-full w-full pl-3 focus:outline-none  "
              placeholder="Numéro de téléphone"
              type="tel"
              name="num"
              id=""
            />
          </div>
          <div className="w-full relative h-12 group transition-all duration-200 ease-out focus-within:bg-gray-50 outline-light-blue outline focus-within:outline-sky-300 bg-white rounded-sm flex items-center">
            <div className="w-16 transition-all duration-200 ease-out h-full group-focus-within:border-r-sky-300 border-r-2 border-r-gray-300 grid place-items-center ">
              <GrAidOption className="text-2xl text-dark-blue" />
            </div>
            <label
              className="absolute text-sm left-0 transition-all ease-in-out duration-300 group-focus-within:-translate-y-1 group-focus-within:text-sky-300 -top-6 font-medium text-white"
              htmlFor="course"
            >
              Formation Choisi
            </label>
            <select
              name="course"
              required
              {...register("course", { required: true })}
              className="h-full rounded-none w-full pl-3 focus:outline-none  "
            >
              {formations.length !== 0 &&
                formations.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <button
          disabled={isSubmitSuccessful}
          type="submit"
          className="continue-application disabled:cursor-not-allowed bg-main-red"
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
      </form>
    </div>
  );
};

export default GlobalForm;
