import React from "react";

const Partners = () => {
  const partners = ["/partners/emirates.png", "/partners/algerie.png", "/partners/amadeus.png", "/partners/tal.png", "/partners/france.png", "/partners/iata.png", "/partners/swissport.png", "/partners/qatar.svg"];
  return (
    <section className="z-[5]  md:min-h-[12rem] flex items-center  w-full  bg-white drop-shadow-xl   relative  ">
      <div data-scrollh="2" className="h-1 scrollLineH w-0 bg-main-red absolute bottom-0 z-[10]"></div>
      <div className="items-center  px-6 sm:px-16 py-4 gap-4 relative flex-wrap flex justify-evenly w-full">
        {partners.map((pic, index) => (
          <img key={index} className="sm:w-24 w-12 object-contain" src={pic} alt={"sponsor logo"} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
