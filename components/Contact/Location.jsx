import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

const Location = () => {
  const images = ["/FlyfraLocation.jpg", "/FlyfFraTeam.jpg"];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="md:h-[80vh] px-12 w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 pb-20    ">
      <div className="h-full  rounded-md overflow-hidden w-full ">
        <Carousel
          customTransition="all 1s ease-out"
          className=" overflow-hidden  w-full  relative "
          autoPlay
          pauseOnHover
          rewindWithAnimation={true}
          autoPlaySpeed={3000}
          responsive={responsive}
        >
          {images.map((img, index) => (
            <div key={index} className="rounded-lg h-full w-full">
              <img
                alt="image describing where the academy is"
                className="md:h-[70vh] h-96 rounded-lg  w-full  object-center object-cover "
                src={img}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <Image
        alt="map location of flyfra"
        className="object-cover md:h-[70vh] h-96   object-center"
        src={"/map.jpg"}
        width={3244}
        height={2768}
      />
    </section>
  );
};

export default Location;
