import React from 'react'

export const MateriaForm = ({edit}) => {
    return (
        <div className='m-5 '>
            <div className='pb-5'>
                <h1 className='text-xl font-bold '>{edit ? 'Editar' : 'Nueva'} Materia</h1>
            </div>
            <form>
                <div className="md:grid md:grid-cols-2 gap-6">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Código<span className='text-red-500'>*</span></label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Materia<span className='text-red-500'>*</span></label>
                        <input type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Grado<span className='text-red-500'>*</span></label>
                        <input type="number" style={{ MozAppearance: 'textfield', appearance: 'textfield' }} id="grado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Calificación Minima<span className='text-red-500'>*</span></label>
                        <input type="number" style={{ MozAppearance: 'textfield', appearance: 'textfield' }} id="grado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-fit h-fit sm:w-auto px-5 py-2.5 text-center"
                >
                    {edit?'Actualizar':'Registrar'}
                </button>
            </form>
        </div>
    )
}
