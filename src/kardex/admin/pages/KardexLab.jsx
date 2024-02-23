import React from 'react'
import { Kardex } from '../../components/Kardex';

export const KardexLab = () => {
  const alumno = {"matricula":"18030514","nombre":"Jose Andres","grado":"5","carrera":"ISC"};

  return (
    <div className='m-5'>
      <div className='pb-5'>
        <h1 className='text-xl font-bold' >Kardex de {alumno.nombre}</h1>
      </div>
      <div >
        <Kardex/>
      </div>
    </div>
  )
}
