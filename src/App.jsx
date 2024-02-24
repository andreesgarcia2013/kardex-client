import React from 'react'
import { LoginPage } from './auth/pages/LoginPage'
import { HomePage } from './kardex/pages/HomePage'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context/authContext'
import { AlumnoProvider } from './kardex/admin/context/alumnoContext'

export const App = () => {
  return (
    <AuthProvider>
      <AlumnoProvider>
        <AppRouter/>
      </AlumnoProvider>
    </AuthProvider>
  )
}
