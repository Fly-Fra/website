import React from "react";

const DescriptionsSection = ({ title, text,offset }) => {
  return (
    <div className="flex flex-col my-16 w-full  gap-y-8">
      <p className=" text-main-red font-medium text-2xl md:text-3xl tracking-[0.2em] relative left-1 uppercase">{title}</p>
      <p data-scrolli={offset} className="md:text-xl opacity-0 translate-y-3 scrollInfo leading-loose font-Montserrat-alt">
        {text}
      </p>
    </div>
  );
};

export default DescriptionsSection;
