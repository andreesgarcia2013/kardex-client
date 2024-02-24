import React from 'react'

export const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen transition-opacity duration-500 ease-in-out">
          <img
          
            src="src/assets/loading.gif" // Reemplaza esto con la URL de tu imagen
            alt="Imagen centrada"
            className="max-w-full h-auto"
          />
        </div>
      )
}
