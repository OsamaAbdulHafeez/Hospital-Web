import React from 'react';

//Props Are Coming Fm Ambuance.jsx
const CreateUserForm = ({ modalRef, onClose, createUserInputs, setCreateUserInputs, addUser }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateUserInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(createUserInputs);
    onClose();
  };

  return (
    <div ref={modalRef} className="fixed inset-0 bg-opacity-50 justify-center  items-center z-50 hidden ">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h2 className="text-2xl text-red-900 font-bold mb-4">Create New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Van Type</label>
            <select required
              name="vanType"
              value={createUserInputs.vanType}
              onChange={handleChange}
              className='w-full bg-gray-200 p-3 rounded-md'>
              <option value="" disabled>Select Van Type</option>
              <option value="AC" className='font-semibold '> With AC</option>
              <option value="Without AC" className='font-semibold  '>Without AC</option>
              <option value="With Oxygen" className='font-semibold '>With Oxygen</option>
            </select>
            {/* <input type="text" name="vanType" value={ambulanceInputs.vanType} onChange={handleChange} className="w-full mt-1 p-2 border rounded-md" /> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Driver Name</label>
            <input type="text" name="driverName" value={createUserInputs.driverName} onChange={handleChange} autoComplete='off' className=" w-full mt-1 p-2 border rounded-md" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input type="text" name="username" value={createUserInputs.username} onChange={handleChange} autoComplete='off' className=" w-full mt-1 p-2 border rounded-md" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Van Number</label>
            <input type="text" name="vanNumber" value={createUserInputs.vanNumber} onChange={handleChange} autoComplete='off' className=" w-full mt-1 p-2 border rounded-md" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Driver Number</label>
            <input type="text" name="driverNumber" value={createUserInputs.driverNumber} onChange={handleChange} autoComplete='off' className=" w-full mt-1 p-2 border rounded-md" required/>
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
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
