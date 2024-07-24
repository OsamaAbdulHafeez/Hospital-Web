import React from 'react';

const AmbulanceFormModal = ({ modalRef, onClose }) => {
  return (
    <div ref={modalRef} className="fixed inset-0 bg-gray-800 bg-opacity-50 justify-center items-center z-50 hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-red-900 font-bold mb-4">Add Ambulance</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Van Name</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Van Number</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Driver Name</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Driver Number</label>
            <input type="text" className="w-full mt-1 p-2 border rounded-md" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md">
             Add Ambulance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AmbulanceFormModal;
