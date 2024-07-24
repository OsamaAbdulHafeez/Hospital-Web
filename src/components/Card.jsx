import React from 'react';

const Card = ({ title, description, value, icon,color }) => {
  return (
    <div className={`bg-white hover:bg-slate-100 cursor-pointer rounded-lg shadow-md p-6 flex items-center space-x-4 w-full`}>
      <div className="text-blue-500">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="text-2xl font-semibold text-gray-800 mt-2">{value}</div>
      </div>
    </div>
  );
};

export default Card;
