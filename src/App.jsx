import React from 'react'
import { LoginPage } from './auth/pages/LoginPage'
import { HomePage } from './kardex/pages/HomePage'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/context/authContext'
import { AlumnoProvider } from './kardex/admin/context/alumnoContext'
import { MateriaProvider } from './kardex/admin/context/materiaContext'
import { AdminProvider } from './kardex/admin/context/adminContext'
import { KardexProvider } from './kardex/admin/context/kardexContext'

export const App = () => {
  return (
    <AuthProvider>
      <AlumnoProvider>
        <AdminProvider>
          <MateriaProvider>
            <KardexProvider>
              <AppRouter/>
            </KardexProvider>
          </MateriaProvider>
        </AdminProvider>
      </AlumnoProvider>
    </AuthProvider>
  )
}
