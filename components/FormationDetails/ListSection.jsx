
const ListSection = ({ title, elements, offset, page }) => {
  return  (
    <div className="flex flex-col my-16 w-full  gap-y-8">
    <p className=" text-main-red font-medium text-2xl md:text-3xl tracking-[0.2em] relative left-1 uppercase">
      {title}
    </p>
    <ul className="md:text-xl pl-8 flex flex-col gap-y-3 leading-loose font-Montserrat-alt">
      {elements.map((item, index) => (
        <li
          data-scrolli={offset + index}
          key={index}
          className="list-item opacity-0 scrollInfo translate-y-3 list-outside list-disc"
        >
          {item.text}
        </li>
      ))}
    </ul>
  </div>
  ) 
};

export default ListSection;
