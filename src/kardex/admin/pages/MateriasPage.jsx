import React, { useEffect } from 'react'
import { TopTitle } from '../../components/TopTitle';
import { DataTable } from '../../components/DataTable';
import { useNavigate } from 'react-router-dom';
import { useMateria } from '../context/materiaContext';

export const MateriasPage = () => {
    const navigate=useNavigate()

    const {materias, getMaterias} = useMateria();

    const handleNewMateria = () => {
        navigate('/materias/nuevo')
    };

    useEffect(() => {
        getMaterias();
    }, []);

    const headers = ['CODIGO', 'MATERIA', 'GRADO', 'CAL MIN','ACCIÓN'];
    // const data = [
    //   ['MAT001', 'Matemáticas', 5, 70, <a href="#">Edit</a>],
    // ];

    const data = materias.map((materia) => [
        materia.codigo,
        materia.materia,
        materia.grado,
        materia.calificacion_minima,
        <div className='space-x-2'>
            <button onClick={()=>navigate(`/materias/${materia.id_materia}`)}>Editar</button>
        </div>
    ]);

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
