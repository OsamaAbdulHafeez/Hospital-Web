import React, { useRef, useState } from 'react'
import AmbulanceTable from '../components/AmbulanceTable'
import { FaAmbulance } from "react-icons/fa";
import AmbulanceFormModal from '../components/AmbulanceFormModal';
import AmbulanceBg from '../assets/ambulance-bg.avif'


const Ambulance = () => {


    const modalRef = useRef(null); 

    const openModal = () => {
      modalRef.current.style.display = 'flex';
    };
  
    const closeModal = () => {
      modalRef.current.style.display = 'none';
    };


console.log('rendered');
    return (
        <div className='bg-zinc-300 min-h-screen flex flex-col items-center p-10 bg-cover '>
            <div>
                <h1 className='text-4xl font-bold text-red-800'>Ambulance</h1>
            </div>
            <button onClick={openModal} className='bg-sky-300 text-red-900 m-10 text-lg font-semibold px-8 py-2 rounded-full flex items-center space-x-2 hover:bg-sky-400  cursor-pointer'>
                <span>Add Ambulance</span>
                <FaAmbulance size={'23px'} />
            </button>

            <div className='m-9   w-2/3 mx-auto p-5'>
                <AmbulanceTable />
            </div>
            <AmbulanceFormModal modalRef={modalRef} onClose={closeModal} />
        </div>
    )
}

export default Ambulance