import React from 'react';

const CreateUserTable = ({ users }) => {
  return (
    <div className="border border-red-800">
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-sky-600 text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">S.no</th>
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Driver Name</th>
                <th className="py-3 px-6 text-left">Van Type</th>
                <th className="py-3 px-6 text-left">Driver Number</th>
                <th className="py-3 px-6 text-left">Van Number</th>
              </tr>
            </thead>
            <tbody className="text-sm font-semibold">
              {users.map((van, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{index + 1}</td>
                  <td className="py-3 px-6 text-left capitalize">{van.username}</td>
                  <td className="py-3 px-6 text-left capitalize">{van.driverName}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">{van.vanType}</td>
                  <td className="py-3 px-6 text-left">{van.driverNumber}</td>
                  <td className="py-3 px-6 text-left">{van.vanNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateUserTable;
