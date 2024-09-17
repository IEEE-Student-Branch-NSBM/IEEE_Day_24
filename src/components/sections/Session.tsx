import React from 'react';

const Session: React.FC = () => {
  return (
    <div className="container max-w-5xl mx-auto w-full px-4 mt-10 py-8">
      {/* title */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium py-5 text-center">
        SESSIONS
      </h1>

      <div className=" p-6 mt-10">
        {/* single agenda */}
        <div>
          {/* ------------------------------------------------- */}
          <div className="flex flex-col md:flex-row items-start px-4 md:p-6 rounded-lg text-white my-5">
            {/* Phase Number */}
            <div className="flex flex-col items-center justify-center text-center p-5 border-b md:border-b-0 md:border-r border-gray-500 mb-4 md:mb-0 md:mr-5">
              <div className="text-4xl font-bold">01</div>
              <div className="text-sm text-gray-400">phase</div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Title and Time in the same row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h2 className="text-[26px] md:text-2xl font-semibold">Agenda phase</h2>
                <div className="text-[16px] font-medium mt-2 md:mt-0">9:30 am - 10:30 am</div>
              </div>

              {/* Description below */}
              <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          {/* ------------------------------------------------- */}

          {/* Duplicate structure for another agenda item */}
          <div className="flex flex-col md:flex-row items-start p-4 md:p-6 rounded-lg text-white my-5">
            {/* Phase Number */}
            <div className="flex flex-col items-center justify-center text-center p-5 border-b md:border-b-0 md:border-r border-gray-500 mb-4 md:mb-0 md:mr-5">
              <div className="text-4xl font-bold">02</div>
              <div className="text-sm text-gray-400">phase</div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Title and Time in the same row */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h2 className="text-[26px] md:text-2xl font-semibold">Agenda phase</h2>
                <div className="text-[16px] font-medium mt-2 md:mt-0">10:30 am - 11:30 am</div>
              </div>

              {/* Description below */}
              <p className="mt-2 text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          {/* ------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Session;
