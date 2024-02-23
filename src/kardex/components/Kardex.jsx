import React, { useState } from 'react'
import { MateriaSelector } from './MateriaSelector';

export const Kardex = () => {

    const headers = ['', 'CÓDIGO', 'MATERIA', 'GRADO', 'CALIFICACIÓN'];

    const materias = [
        { "id": 1, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 2, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 3, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 4, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 5, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 6, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 7, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 8, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 9, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 10, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 11, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 12, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 13, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 14, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 15, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 16, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 17, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 18, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 },
        { "id": 19, "codigo": "MAT001", "materia": "Matemáticas", "grado": 5 }
    ]

    const [materiasSeleccionadas, setMateriasSeleccionadas] = useState([]);

    const handleMateriaSeleccionada = (materiaId, nombreMateria, calificacion) => {
        const materiaIndex = materiasSeleccionadas.findIndex((materia) => materia.id === materiaId);

        setMateriasSeleccionadas((prevSelected) =>
            materiaIndex !== -1
                ? prevSelected.filter((materia) => materia.id !== materiaId)
                : [...prevSelected, { id: materiaId, materia: nombreMateria, calificacion: calificacion }] // Reemplaza 'NombreMateria' con el nombre real de la materia
        );
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
                    {materias.map((materia) => (
                        <MateriaSelector key={materia.id} materia={materia} handleMateriaSeleccionada={handleMateriaSeleccionada} />
                    ))
                    }
                </tbody>
            </table>
        </div>
            
            <div className='flex m-5 justify-end'>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-fit h-fit sm:w-auto px-5 py-2.5 text-center"
                >
                    Guardar
                </button>
            </div>
        </>
    )
}
