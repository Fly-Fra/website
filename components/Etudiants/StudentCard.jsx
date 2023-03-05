import Image from "next/image";
import Link from "next/link";
const StudentCard = ({ title, student, slug, index, page }) => {
  return page === "témoin" ? (
    <LinkCard title={title} slug={slug} student={student} index={index} />
  ) : (
    <NormalCard student={student} index={index} />
  );
};

export default StudentCard;

const NormalCard = ({ student, index }) => {
  return (
    <article
      data-scrolli={index + 5}
      className="sm:h-[33rem] scrollInfo opacity-0 translate-y-6 gap-y-6 px-0 sm:px-4 sm:p-8 flex flex-col w-full"
    >
      <h3 className="sm:text-3xl text-xl uppercase  font-semibold text-main-red">Nos etudiants</h3>

      <div className="w-full relative right-1 flex items-center">
        <svg className="h-8 relative left-2 bottom-1 w-12" viewBox="0 0 62 40" fill="none">
          <path
            d="M19.1673 0.461048L11.5006 14.5592H26.834V39.231H0.000648499V14.5592L7.66732 0.461048H19.1673ZM53.6673 0.461048L46.0007 14.5592H61.334V39.231H34.5007V14.5592L42.1673 0.461048H53.6673Z"
            fill="#37474F"
          />
        </svg>
        <div className="h-1 bg-gray-800 w-full"></div>
      </div>
      <p className="text-gray-900 text-lg font-medium text-left sm:text-justify">{student?.temoignage}</p>
      <div className="w-full justify-between sm:flex-row flex-col gap-y-4 flex text-gray-900 ">
        <div className="flex items-center gap-x-8">
          <span className="text-xl font-semibold capitalize">{student?.name}</span>
          <span>{student?.graduationYear}</span>
        </div>
        <Image
          alt={student?.name}
          src={student?.image.url}
          width={student?.image.width}
          height={student?.image.height}
          className="xl:w-32 xl:h-32 w-24 h-24 object-center object-cover rounded-full"
        />
      </div>
    </article>
  );
};
const LinkCard = ({ title, student, slug, index }) => {
  return (
    <article
      data-scrolli={index + 5}
      className="sm:h-[33rem] scrollInfo opacity-0 translate-y-6 gap-y-6 sm:p-8 flex flex-col w-full"
    >
      <Link className="w-fit " href={`/nos-formations/${slug}`}>
        <h3 className="sm:text-3xl hover:text-red-400 transition-colors ease-in duration-200 text-xl uppercase  font-semibold text-main-red">
          {title}
        </h3>
      </Link>

      <div className="w-full relative right-1 flex items-center">
        <svg className="h-8 relative left-2 bottom-1 w-12" viewBox="0 0 62 40" fill="none">
          <path
            d="M19.1673 0.461048L11.5006 14.5592H26.834V39.231H0.000648499V14.5592L7.66732 0.461048H19.1673ZM53.6673 0.461048L46.0007 14.5592H61.334V39.231H34.5007V14.5592L42.1673 0.461048H53.6673Z"
            fill="#37474F"
          />
        </svg>
        <div className="h-1 bg-gray-800 w-full"></div>
      </div>
      <p className="text-gray-900 sm:text-lg font-medium text-left sm:text-justify">{student?.temoignage}</p>
      <div className="w-full justify-between sm:flex-row flex-col gap-y-4 flex text-gray-900 ">
        <div className="flex items-center gap-x-8">
          <span className="text-xl font-semibold capitalize">{student?.name}</span>
          <span>{student?.graduationYear}</span>
        </div>
        <Image
          alt={student?.name}
          src={student?.image.url}
          width={student?.image.width}
          height={student?.image.height}
          className="xl:w-32 xl:h-32 w-24 h-24 object-center object-cover rounded-full"
        />
      </div>
    </article>
  );
};
