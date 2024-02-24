import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext';

export const LoginPage = () => {

  const {
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();

  const navigate=useNavigate()

  const onLogin = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/',{
          replace: true
        })
    }
  }, [isAuthenticated]);



  return (
    <>
    <div className='flex bg-blue-950 h-screen justify-center items-center'>
        <div className='flex bg-white rounded-md  md:w-1/3 justify-center items-center'>
            <form onSubmit={handleSubmit(onLogin)} className='flex flex-col p-5 space-y-2 h-full w-full justify-around'>
                <p className='font-bold '>Inicio de Sesión</p>
                <div className='space-y-2'>
                {loginErrors && <p className='text-red-500'>{loginErrors}</p>}
                  <p>Email</p>
                  <input type="email" {...register("email", { required: true }) } placeholder='Email' className='rounded-md px-2 py-2 w-full bg-gray-100'/>
                  {errors.email && <p className='text-red-500'>Email es requerido</p>}
                  <p>Password</p>
                  <input type="password" {...register("password", { required: true })} placeholder='Password' className='rounded-md px-2 py-2 w-full bg-gray-100'/>
                  {errors.password && <p className='text-red-500'>Password es requerido</p>}
                </div>
                <div className='flex justify-center'>
                  <button type='submit' className="bg-blue-500 text-white rounded-full px-10 py-2 hover:bg-blue-600 focus:outline-none">
                      Iniciar sesión
                  </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
