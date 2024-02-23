import React from 'react'

export const LoginPage = () => {
  return (
    <>
    <div className='flex bg-blue-950 h-screen justify-center items-center'>
        <div className='flex bg-white rounded-md w-3/4 h-1/3 md:w-1/3 justify-center items-center'>
            <form className='flex flex-col p-5 space-y-2 h-full w-full justify-around'>
                <p className='font-bold '>Inicio de Sesión</p>
                <div className='space-y-2'>
                  <p>Email</p>
                  <input type="email" placeholder='Email' className='rounded-md px-2 py-2 w-full bg-gray-100' required/>
                  <p>Password</p>
                  <input type="password" placeholder='Password' className='rounded-md px-2 py-2 w-full bg-gray-100'/>
                </div>
                <div className='flex justify-center'>
                  <button  className="bg-blue-500 text-white rounded-full px-10 py-2 hover:bg-blue-600 focus:outline-none" required>
                      Iniciar sesión
                  </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
