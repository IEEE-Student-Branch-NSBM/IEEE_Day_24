import Image from 'next/image';

// images
import RegOpen from "@/assets/reg-open.svg";
import RegClose from "@/assets/reg-close.svg";
import EventDay from "@/assets/event-day.svg";

const Timeline = () => {
  return (
    <>
    <h1 className="text-center text-4xl font-bold md:py-28 py-10">TIMELINE</h1>
    <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 pb-10">
      {/* Stack 1 Start */}
      <div className="col-span-4 w-full h-full md:my-5 my-0 md:block hidden">
        <Image className='mx-auto' src={RegOpen} alt="Register Open" width={320} height={200} />
      </div>
      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-[#3DA6FF]"></div>
        <div className="top-0 absolute w-6 h-6 rounded-full bg-[#3DA6FF] z-10 text-white text-center"></div>
      </div>
      <div className="md:col-span-4 w-full h-full md:my-5 my-0 col-span-8">
        <div className="w-full h-full rounded-md p-2 md:pl-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium py-5">
            REGISTERATIONS <br /> OPEN
          </h1>
          <p className="text-gray-100 text-lg sm:text-xl pb-5 md:w-[80%] w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Stack 2 */}
      <div className="relative col-span-1 w-full h-full flex justify-center items-center md:hidden">
        <div className="h-full w-1 bg-white"></div>
        <div className="top-0 absolute w-6 h-6 rounded-full bg-[#3DA6FF] z-10 text-white text-center"></div>
      </div>
      <div className="md:col-span-4 w-full h-full md:my-5 my-0 col-span-8 flex justify-center items-center">
        <div className="w-full h-full rounded-md p-2 md:pl-4 md:ml-20">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium py-5">
            REGISTERATIONS <br /> CLOSE
          </h1>
          <p className="text-gray-100 text-lg sm:text-xl pb-5 md:w-[80%] w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="relative col-span-1 w-full h-full md:flex hidden justify-center items-center">
        <div className="h-full w-1 bg-white"></div>
        <div className="top-0 absolute w-6 h-6 rounded-full bg-[#3DA6FF] z-10 text-white text-center"></div>
      </div>
      <div className="col-span-4 w-full h-full md:my-5 my-0 md:block hidden">
        <Image src={RegClose} alt="Register Closed" width={320} height={200} />
      </div>
      {/* stack 2 end */}

      {/* Stack 3 Start */}
      <div className="col-span-4 w-full h-full md:my-5 my-0 md:block hidden">
        <Image src={EventDay} alt="IEEE Day Logo" className="w-20 h-auto md:w-80 mx-auto" />
      </div>
      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="top-0 absolute w-6 h-6 rounded-full bg-white z-10 text-white text-center"></div>
      </div>
      <div className="md:col-span-4 w-full h-full md:my-5 my-0 col-span-8">
        <div className="w-full h-full rounded-md p-2 md:pl-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium py-5">IEEE DAY 2024</h1>
          <p className="text-gray-100 text-lg sm:text-xl pb-5 md:w-[80%] w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Timeline;
