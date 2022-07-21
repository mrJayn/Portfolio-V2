import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/projects/property.jpg";
import { MdCode } from "react-icons/md";
import { VscChevronLeft } from "react-icons/vsc";

const Title = "Property Finder";
const Description =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores labore, consequuntur ipsum cumque ad ut excepturi quisquam veniam qui voluptates. Corporis molestiae facere cupiditate magnam commod suscipit autem sapiente ea! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, in officiis obcaecati ipsum blanditiis dolore, eos quae rerum a, enim corporis laborum voluptate eveniet! Ipsum, debitis! Amet corrupti veritatis ad?";

const Technologies = [
  "React",
  "Tailwind",
  "Javascript",
  "FireBase",
  "Google API",
  "Zillow API",
];

const property = () => {
  return (
    <div className="w-full" id="property">
      {/** HEADER **/}
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[30%] left-5 md:left-10 z-10">
          <Link href="/#featured">
            <div className="styled-return-button styled-link ">
              <VscChevronLeft className="styled-return-icon" size={75} />
            </div>
          </Link>
        </div>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] md:px-12 lg:px-24 text-center sm:text-left z-20">
          <h2 className="py-2">{Title}</h2>
          <h3 className="ml-2 font-normal text-theme-text">
            React JS / Tailwind / Firebase
          </h3>
        </div>
      </div>

      {/** CONTENT GRID **/}
      <div className="max-w-[1240px] grid sm:grid-cols-7 gap-8 mx-auto p-2 pt-8 text-center lg:text-left md:px-12 lg:px-24">
        <div className="col-span-5">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{Description}</p>
          <div className="w-full styled-flex py-10 justify-around lg:justify-start">
            <div className="px-10">
              <button className="styled-link">Demo</button>
            </div>
            <div className=" px-10">
              <button className="styled-link">Code</button>
            </div>
          </div>
        </div>

        {/** AUTO FILLED **/}
        <div className="styled-element styled-element-lock col-span-5 sm:col-span-2 sm:max-w-[240px] py-4">
          <p className="text-center font-bold mb-4">Technologies</p>
          <div className="grid grid-cols-3 sm:grid-cols-1">
            {Technologies.map((TechName) => (
              <div className=" styled-flex sm:justify-start pb-3 sm:ml-[15%] font-robotoMono text-sm ">
                <MdCode className="mr-1 styled-link" />{" "}
                <p className="styled-link">{TechName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
