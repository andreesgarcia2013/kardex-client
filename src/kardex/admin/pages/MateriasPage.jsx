import React from 'react'
import { TopTitle } from '../../components/TopTitle';
import { DataTable } from '../../components/DataTable';

export const MateriasPage = () => {
    const handleNewMateria = () => {
        console.log('Función nueva materia');
    };

    const headers = ['CODIGO', 'MATERIA', 'GRADO', 'CAL MIN','ACCIÓN'];
    const data = [
      ['MAT001', 'Matemáticas', 5, 70, <a href="#">Edit</a>],
    ];

    return (
        <>
            <div className='flex justify-between m-5 items-center'>
                <TopTitle title='Materias'  handle={handleNewMateria} />
            </div>
            <div className='overflow-x-scroll shadow-md sm:rounded-lg m-5'>
                <DataTable headers={headers} data={data} />
            </div>
        </>
    )
}
