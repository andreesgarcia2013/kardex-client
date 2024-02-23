import React from 'react'

import { AiOutlinePlus } from 'react-icons/ai';

export const TopTitle = ({title='No title', handle}) => {
  return (
    <>
        <h1 className='font-extrabold text-4xl'>{title}</h1>
        <button onClick={handle} className="flex flex-row bg-green-300 text-black rounded-md px-5 py-2 align-middle justify-center items-center  ">
            <AiOutlinePlus></AiOutlinePlus>Nuevo alumno
        </button>
    </>
  )
}
