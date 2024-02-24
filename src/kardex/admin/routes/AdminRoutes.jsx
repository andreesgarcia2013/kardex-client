import React from 'react'
import { Navbar } from '../../components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AlumnosPage } from '../pages/AlumnosPage';
import { AdminPage } from '../pages/AdminPage';
import { AlumnoForm } from '../pages/AlumnoForm';
import { AdminForm } from '../pages/AdminForm';
import { MateriasPage } from '../pages/MateriasPage';
import { MateriaForm } from '../pages/MateriaForm';
import { KardexLab } from '../pages/KardexLab';

export const AdminRoutes = () => {
    const navItems = [
        { id: 1, text: 'Alumnos',         route:'alumnos' },
        { id: 2, text: 'Administradores', route:'admins' },
        { id: 3, text: 'Materias',        route:'materias' },
      ];
  return (
    <>
        <Navbar navItems={navItems}/>
        <Routes>
            <Route path="alumnos"  element={<AlumnosPage />}/>
            <Route path="alumnos/nuevo"  element={<AlumnoForm/>}/>
            <Route path="alumnos/{id_alumno}"  element={<AlumnoForm/>}/>
            <Route path="admins"  element={<AdminPage />}/>
            <Route path="admins/nuevo"  element={<AdminForm />}/>
            <Route path="administradores/{id_usuario}"  element={<AdminForm />}/>
            <Route path="materias"  element={<MateriasPage />}/>
            <Route path="materias/nuevo"  element={<MateriaForm />}/>
            <Route path="materias/{id_materia}"  element={<MateriaForm />}/>
            <Route path="lab/kardex"  element={<KardexLab />}/>
            <Route path="/"  element={<Navigate to="alumnos" />}/>
        </Routes>
    </>
  )
}
