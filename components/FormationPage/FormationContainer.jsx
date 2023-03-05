import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const FormationContainer = ({ courses }) => {

  return (
    <section name="formations" className="w-full gap-8 my-24 px-8 xl:px-8  h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <Link key={index} href={`/nos-formations/${course.slug}`}>
          <article key={index} className="md:h-96 group shadow-lg  child   h-72 px-4 relative rounded-sm overflow-hidden flex flex-col items-center w-full group bg-white ">
            <div className="h-full w-full z-[3] absolute group-hover:bg-opacity-80 group-hover:backdrop-blur-sm bg-dark-blue bg-opacity-30 transition-all duration-300 ease-out"></div>
            <Image alt={course.title} width={course.coverPicture.width} height={course.coverPicture.height} src={course.coverPicture.url} className="w-full h-full absolute group-hover:scale-105 transition-transform ease-out duration-300 object-cover object-center" />
            <div className="flex justify-between w-full mt-6 z-[4] relative items-center">
              <h4 className="text-white text-lg md:text-2xl font-bold uppercase  text-left ">{course.title}</h4>
              <BsFillArrowRightCircleFill className="text-2xl z-[4] text-white" />
            </div>
            <p className="text-white text-sm md:text-lg mt-6 font-Roboto opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out  z-[4] text-left">{course.shortDescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default FormationContainer;
