import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, value, icon,link }) => {
  return (
    <Link to={`${link}`} className={`bg-white hover:bg-slate-100 cursor-pointer rounded-lg shadow-md p-6 flex items-center  w-full`}>
      <div className="text-red-900 mr-2">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-red-700">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="text-2xl font-semibold text-gray-800 mt-2">{value}</div>
      </div>
    </Link>
  );
};

export default Card;
