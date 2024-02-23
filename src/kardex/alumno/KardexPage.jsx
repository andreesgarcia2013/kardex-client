import React from 'react'
import { Profile } from '../components/Profile'

import { AiOutlineDownload} from 'react-icons/ai';
import { DataTable } from '../components/DataTable';


export const KardexPage = () => {

    const alumnoInfo = {
        nombre: 'Jane Doe',
        matricula: '18030514',
        grado: '5',
        carrera: 'Ing en sistemas',
        promedio: '85',
    };

    const headers = ['CÓDIGO', 'MATERIA', 'GRADO', 'CALIFICACIÓN'];
    const data = [
      ['MAT001', 'Matemáticas', 5, 70],
    ];

  return (
    <>
        <div className='bg-gray-200 rounded-md m-5 p-5 '>
            <Profile alumno={alumnoInfo} />
        </div>
        <div className='flex justify-end m-5'>
        <button className="flex flex-row bg-green-300 text-black rounded-md px-5 py-2  items-center  ">
            <AiOutlineDownload/>Descargar
        </button>
        </div>
        <div className='overflow-x-scroll shadow-md sm:rounded-lg m-5'>
            <DataTable headers={headers} data={data} />
        </div>
    </>
  )
}
