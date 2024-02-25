import React, { useState } from 'react'

export const MateriaSelector = ({ materia, handleMateriaSeleccionada }) => {
    const [selected, setSelected] = useState(false);
    const [calificacion, setCalificacion] = useState(0);
    

    const handleCheck = () => {
        setSelected(!selected);
        if (!selected) {
            setCalificacion(0);
        }
        handleMateriaSeleccionada(materia.id_materia, materia.materia, calificacion);
    };

    const handleCalificacionChange = (e) => {
        if (selected) {
            setCalificacion(e.target.value);
            handleMateriaSeleccionada(materia.id_materia, materia.materia, e.target.value);
        }
    };


    return (
        <tr key={materia.id_materia}>
            <td>
                <input type="checkbox" checked={selected} onChange={handleCheck} />
            </td>
            <td style={{ fontWeight: selected ? 'bold' : 'normal' }}>{materia.codigo}</td>
            <td style={{ fontWeight: selected ? 'bold' : 'normal' }}>{materia.materia}</td>
            <td style={{ fontWeight: selected ? 'bold' : 'normal' }}>{materia.grado}</td>
            <td>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    style={{ MozAppearance: 'textfield', appearance: 'textfield' }}
                    inputMode="numeric"
                    disabled={!selected}
                    value={selected ? calificacion : 0}
                    onChange={handleCalificacionChange}
                />
            </td>
        </tr>
    )
}
