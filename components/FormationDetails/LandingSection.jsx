import Image from "next/image";
const LandingSection = ({ title, type, image }) => {
  return (
    <section className=" pt-16">
      <p  className="xl:text-lg  text-[#282828] tracking-[0.2em] relative left-1 uppercase">
        {type}
      </p>
      <h1  className="  lg:text-4xl  text-left   text-dark-blue [font-weight:700;] uppercase text-2xl  leading-10 lg:leading-[3rem] tracking-wide">
        {title}
      </h1>
      <div className="w-full  border-4 rounded-lg overflow-hidden border-slate-200 shadow-xl mt-8 ">
            <Image className="w-full h-full aspect-video max-h-96 md:max-h-min object-cover object-center " alt={title} src={image.url} width={image.width} height={image.height} />
      </div>
    </section>
  );
};

export default LandingSection;
