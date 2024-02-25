import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useAdmin } from '../context/adminContext';


export const AdminForm = ({ edit=false }) => {

    const {register, handleSubmit, setValue} = useForm();
    const {createAdmin,getAdmin, updateAdmin, errors} = useAdmin();
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = (data)=>{
        try {
            if (params.id_usuario){
                updateAdmin(params.id_usuario, data, navigate)
            }
            else{
                createAdmin(data, navigate);
            }
        } catch (error) {
            console.log(error);
        }       
    }

    useEffect(() => {
        const loadAdmin = async () => {
            if (params.id_usuario) {
              const {data} = await getAdmin(params.id_usuario);
              setValue("nombre", data.nombre);
              setValue("apellido", data.apellido);
              setValue("email", data.email);
            }
          };
          loadAdmin();
    }, []);

    return (
        <div className='m-5 '>
            <div className='pb-5'>
                <h1 className='text-xl font-bold '>{edit ? 'Editar' : 'Nuevo'} Administrador</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:grid md:grid-cols-2 gap-6">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">{`Nombre(s)`}<span className='text-red-500'>*</span></label>
                        <input {...register("nombre")}  type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Apellidos</label>
                        <input {...register("apellido")}  type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email<span className='text-red-500'>*</span></label>
                        <input {...register("email")}  type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com" required />
                    </div>
                    {
                        edit==false && <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password<span className='text-red-500'>*</span></label>
                        <input {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" minLength={8} required />
                        </div>
                    }
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
