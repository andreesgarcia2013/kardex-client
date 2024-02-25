import React, { useEffect, useState } from 'react'
import { MateriaSelector } from './MateriaSelector';
import { useMateria } from '../admin/context/materiaContext';
import { useKardex } from '../admin/context/kardexContext';
import { useNavigate, useParams } from 'react-router-dom';

export const Kardex = () => {

    const params = useParams();

    const headers = ['', 'CÓDIGO', 'MATERIA', 'GRADO', 'CALIFICACIÓN'];
    const [kardex, setKardex] = useState([]);
    const {getKardex, createKardex} = useKardex();
    const navigate = useNavigate();

    const [materiasSeleccionadas, setMateriasSeleccionadas] = useState([]);

    useEffect(() => {
        const loadKardex = async() => {
            const data = await getKardex(params.id_alumno);
            setKardex(data);
        }

        loadKardex();
    }, []);

    const handleMateriaSeleccionada = (materiaId, nombreMateria, calificacion) => {
        const materiaIndex = materiasSeleccionadas.findIndex((materia) => materia.id_materia === materiaId);

        setMateriasSeleccionadas((prevSelected) =>
            materiaIndex !== -1
                ? prevSelected.filter((materia) => materia.id_materia !== materiaId)
                : [...prevSelected, { id_materia: materiaId, materia: nombreMateria, calificacion: calificacion }] // Reemplaza 'NombreMateria' con el nombre real de la materia
        );
    }

    const handleSumbmit = () =>{
        const data = {
            "id_alumno": params.id_alumno,
            "materias": materiasSeleccionadas
        }
        createKardex(data, navigate);
        
    }

    return (
        <>
            <div className='flex overflow-auto'>
                <table className="w-full text-sm text-center rtl:text-center text-gray-500">
                    <thead className="text-xs text-white uppercase bg-black">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {kardex.map((materia) => (
                            <MateriaSelector key={materia.id_materia} materia={materia} handleMateriaSeleccionada={handleMateriaSeleccionada} />
                        ))
                        }
                    </tbody>
                </table>
            </div>

            <div className='flex m-5 justify-end'>
                <button
                    type="submit"
                    onClick={handleSumbmit}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-fit h-fit sm:w-auto px-5 py-2.5 text-center"
                >
                    Guardar
                </button>
            </div>
        </>
    )
}
