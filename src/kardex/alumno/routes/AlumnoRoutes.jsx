import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { KardexPage } from '../pages/KardexPage'

export const AlumnoRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="kardex"  element={<KardexPage />}/>
            <Route path="/"  element={<Navigate to="kardex" />}/>
        </Routes>
    </>
  )
}
