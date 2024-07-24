import React, { useState } from 'react';

const AmbulanceTable = () => {
    
    const vans = [
        { vanName: 'AC', vanNumber: '1234', driverName: 'John Doe', driverNumber: '555-1234' },
        { vanName: 'Without AC', vanNumber: '5678', driverName: 'Jane Smith', driverNumber: '555-5678' },
        { vanName: 'AC', vanNumber: '1234', driverName: 'John Doe', driverNumber: '555-1234' },
        { vanName: 'Without AC', vanNumber: '5678', driverName: 'Jane Smith', driverNumber: '555-5678' },
       
        
    ];


    const [Ambulance, setAmbulance] = useState(vans) 

    

  return (
    <div className=" border border-red-800">
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-sky-300 text-black uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">S.no</th>
                <th className="py-3 px-6 text-left">Driver Name</th>
                <th className="py-3 px-6 text-left">Van Type</th>
                <th className="py-3 px-6 text-left">Driver Number</th>
                <th className="py-3 px-6 text-left">Van Number</th>
              </tr>
            </thead>
            <tbody className="text-sm font-semibold">
              {Ambulance.map((van, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{index +1}</td>
                  <td className="py-3 px-6 text-left">{van.driverName}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">{van.vanName}</td>
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

export default AmbulanceTable;
