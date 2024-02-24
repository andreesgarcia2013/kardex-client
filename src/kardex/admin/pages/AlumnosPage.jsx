import React, { useEffect } from 'react'


import { TopTitle } from '../../components/TopTitle';
import { DataTable } from '../../components/DataTable';
import { useNavigate } from 'react-router-dom';
import { useAlumno } from '../context/alumnoContext';

export const AlumnosPage = () => {

    const navigate=useNavigate()

    const {alumnos, getAlumnos} = useAlumno();

    const handleNewAlumno = () => {
        navigate('/alumnos/nuevo')
    };

    useEffect(() => {
        getAlumnos();
    }, []);

    const headers = ['Matricula', 'Nombre', 'Grado', 'Carrera', 'Acción'];

    const data = alumnos.map((alumno) => [
            alumno.matricula,
            alumno.usuario.nombre,
            alumno.grado,
            alumno.carrera.carrera,
        ]);

        


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
