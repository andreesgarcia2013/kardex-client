import React from 'react'


import { TopTitle } from '../../components/TopTitle';
import { DataTable } from '../../components/DataTable';

export const AlumnosPage = () => {

    const handleNewAlumno = () => {
        console.log('Función nuevo alumno');
    };

    const headers = ['Matricula', 'Nombre', 'Grado', 'Carrera', 'Accion'];
    const data = [
      ['18030514', 'Jose Andres', '5', 'ISC', <div className='space-x-1'><a href="#">Edit</a><a href="#">Descargar</a></div>],
    ];

    return (
        <>
            <div className='flex justify-between m-5 items-center'>
                <TopTitle title='Alumnos'  handle={handleNewAlumno} />
            </div>
            <div className='overflow-x-scroll shadow-md sm:rounded-lg m-5'>
                <DataTable headers={headers} data={data} />
            </div>
        </>
    )
}
