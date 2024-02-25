import React from 'react'

import { AiOutlineUser } from 'react-icons/ai';

export const Profile = ({alumno={}}) => {
    return (
        <div className='flex flex-row space-x-5 align-middle items-center'>
          <div className='bg-gray-400 rounded-full w-fit h-fit p-2'>
            <AiOutlineUser className='text-8xl' />
          </div>
          <div className='flex flex-col'>
            <p><span className='font-bold'>Nombre:</span> {alumno.nombre}</p>
            <p><span className='font-bold'>Matricula:</span> {alumno.matricula}</p>
            <p><span className='font-bold'>Grado:</span> {alumno.grado}</p>
            <p><span className='font-bold'>Carrera:</span> {alumno.carrera}</p>
            <p><span className='font-bold'>Promedio:</span> {alumno.promedio}</p>
          </div>
        </div>
      );
}
