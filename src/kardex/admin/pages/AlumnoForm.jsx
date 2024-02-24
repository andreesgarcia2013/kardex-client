import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAlumno } from '../context/alumnoContext';
import { useNavigate } from 'react-router-dom';

export const AlumnoForm = ({ edit }) => {

    const {createAlumno, errors} = useAlumno();
    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate();

    const [sucess, setSucess] = useState(false);

    const onSubmit = (data)=>{
        try {
            createAlumno(data, navigate);
            console.log(errors);
        } catch (error) {
            console.log(error);
        }       
    }
    return (
        <div className='m-5 '>
            <div className='pb-5'>
                <h1 className='text-xl font-bold '>{edit ? 'Editar' : 'Nuevo'} Alumno</h1>
                {errors && <p className='text-red-500'>{errors}</p>}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:grid md:grid-cols-2 gap-6">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">{`Nombre(s)`}<span className='text-red-500'>*</span></label>
                        <input {...register("nombre")} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Apellidos</label>
                        <input {...register("apellido")} type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email<span className='text-red-500'>*</span></label>
                        <input {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password<span className='text-red-500'>*</span></label>
                        <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" minLength={8} required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Matricula<span className='text-red-500'>*</span></label>
                        <input {...register("matricula")} type="text" id="matricula" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Grado<span className='text-red-500'>*</span></label>
                        <input {...register("grado")} type="number" style={{ MozAppearance: 'textfield', appearance: 'textfield' }} id="grado" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Carrera<span className='text-red-500'>*</span></label>
                        <input {...register("id_carrera")} type="text" id="carrera" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
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
