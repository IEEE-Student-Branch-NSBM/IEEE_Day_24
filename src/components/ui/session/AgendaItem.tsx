import React from 'react';

interface AgendaItemProps {
  phaseNumber: string;
  phaseTitle: string;
  time: string;
  description: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ phaseNumber, phaseTitle, time, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center p-4 md:p-6 rounded-lg text-white my-5">
      {/* Phase Number */}
      <div className="flex flex-col md:items-center justify-center md:px-5 p-1 border-b-2 md:border-b-0 md:border-r border-gray-500 pb-2 my-2 md:mb-0 md:mr-5">
        <div className="text-4xl font-sansation">{phaseNumber}</div>
        <div className="text-sm text-gray-400">phase</div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Title and Time in the same row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-[26px] md:text-3xl font-sansation">{phaseTitle}</h2>
          <div className="text-[18px] font-medium mt-2 md:mt-0">{time}</div>
        </div>

        {/* Description below */}
        <p className="mt-2 text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default AgendaItem;