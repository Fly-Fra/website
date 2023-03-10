import { useState } from "react";

const Faq = () => {
  const questions = [
    { title: "question", awnser: "Test, sit amet consectetur adipisicing elit. Velit quibusdam amet recusandae vitae ipsum ratione nobis voluptas, eaque ipsam distinctio ut. Nemo similique sequi, excepturi incidunt aspernatur animi pariatur odit!" },
    { title: "question2", awnser: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quibusdam amet recusandae vitae ipsum ratione nobis voluptas, eaque ipsam distinctio ut. Nemo similique sequi, excepturi incidunt aspernatur animi pariatur odit!" },
    { title: "question3", awnser: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quibusdam amet recusandae vitae ipsum ratione nobis voluptas, eaque ipsam distinctio ut. Nemo similique sequi, excepturi incidunt aspernatur animi pariatur odit!" },
    { title: "question3", awnser: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quibusdam amet recusandae vitae ipsum ratione nobis voluptas, eaque ipsam distinctio ut. Nemo similique sequi, excepturi incidunt aspernatur animi pariatur odit!" },
  ];
  const [selected, setselected] = useState("");
  return (
    <section className="w-full min-h-screen pb-28 gap-y-12 bg-gray-50  flex flex-col py-8 relative  z-[2] overflow-hidden">
      <h3 data-scrollx="2" className="md:text-5xl scrollX opacity-0 -translate-x-4 text-3xl font-bold uppercase w-[50%] md:w-72 border-b-4 pb-4 border-main-red flex text-dark-blue justify-end">FAQ'S</h3>
      <div className="w-full md:pr-28 xl:pr-60 flex-col  px-8 sm:px-20 flex items-end gap-4">
        {questions.map((sec, index) => (
          <details data-scrollx={index +3} open  key={index} onClick={() => setselected(sec.title)} className="h-fit scrollX opacity-0 translate-x-4 relative z-[4] cursor-pointer w-full overflow-hidden open:bg-white open:p-4 open:shadow-md border-b-2 transition-all duration-300 ease-out text-xl font-medium border-b-main-red  flex-col md:w-[70%] xl:w-[60%] rounded-sm py-2  flex justify-center">
            <summary className="">{sec.title}</summary>
            <p className={`font-light transition-all duration-300 ease-out mt-2 ml-1 text-base text-justify `}>{sec.awnser}</p>
          </details>
        ))}
      </div>
      <div className="md:w-96 md:h-96 h-48 w-48 z-[2] bg-main-red rounded-full -left-20 -bottom-20 md:-bottom-32 md:-left-32 absolute"></div>
    </section>
  );
};

export default Faq;
