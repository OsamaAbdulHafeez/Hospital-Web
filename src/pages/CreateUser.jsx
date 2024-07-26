import React, { useRef, useState } from 'react';
import CreateUserTable from '../components/CreateUserTable';
import { FaUser } from "react-icons/fa";
import CreateUserForm from '../components/CreateUserForm';

const CreateUser = () => {
  const [createUserInputs, setCreateUserInputs] = useState({
    vanType: '',
    username: '',
    vanNumber: '',
    driverNumber: '',
    driverName: '',
  });

  const [users, setUsers] = useState([
  
  ]);

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.style.display = 'flex';
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
  };

  const addUser = (newuser) => {
    setUsers([...users, { 
      vanType: newuser.vanType, 
      vanNumber: newuser.vanNumber, 
      driverName: newuser.driverName, 
      username: newuser.username, 
      driverNumber: newuser.driverNumber 
    }]);
    setCreateUserInputs({
      vanType: '',
      vanNumber: '',
      driverName: '',
      driverNumber: '',
      username: '',
    });
  };

  return (
    <div className='min-h-screen flex flex-col items-center p-10 bg-cover'>
      <div>
        <h1 className='text-4xl font-bold text-red-800'>User Details</h1>
      </div>
      <button onClick={openModal} className='bg-red-800 text-white m-10 text-lg px-8 py-2 rounded-full flex items-center space-x-2 hover:bg-red-900 cursor-pointer'>
        <FaUser size={'23px'} />
        <span className='font-semibold'>Create New User</span>
      </button>
      <div className='m-9 w-2/3 mx-auto p-5'>
        <CreateUserTable users={users} />
      </div>
      <CreateUserForm 
        createUserInputs={createUserInputs} 
        setCreateUserInputs={setCreateUserInputs} 
        modalRef={modalRef} 
        onClose={closeModal} 
        addUser={addUser} 
      />
    </div>
  );
};

export default CreateUser;
