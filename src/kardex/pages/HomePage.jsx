import React from 'react'
import { Navbar } from '../components/Navbar'
import { AlumnosPage } from '../admin/pages/AlumnosPage'
import { AdminPage } from '../admin/pages/AdminPage'
import { MateriasPage } from '../admin/pages/MateriasPage'
import { AlumnoForm } from '../admin/pages/AlumnoForm'
import { AdminForm } from '../admin/pages/AdminForm'
import { MateriaForm } from '../admin/pages/MateriaForm'
import { KardexLab } from '../admin/pages/KardexLab'

export const HomePage = () => {
  return (
    <>
    <div className='fixed w-screen h-screen overflow-auto'>
        <Navbar/>
        <MateriasPage/>
    </div>
    </>
  )
}
