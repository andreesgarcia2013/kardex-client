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
import { KardexPage } from '../pages/KardexPage';

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
            <Route path="alumnos/:id_alumno"  element={<AlumnoForm edit={true} />}/>
            <Route path="admins"  element={<AdminPage />}/>
            <Route path="admins/nuevo"  element={<AdminForm />}/>
            <Route path="admins/:id_usuario"  element={<AdminForm edit={true} />}/>
            <Route path="materias"  element={<MateriasPage />}/>
            <Route path="materias/nuevo"  element={<MateriaForm />}/>
            <Route path="materias/:id_materia"  element={<MateriaForm edit={true} />}/>
            <Route path="lab/kardex/:id_alumno"  element={<KardexLab />}/>
            <Route path="kardex/:id_alumno"  element={<KardexPage />}/>
            <Route path="/"  element={<Navigate to="alumnos" />}/>
        </Routes>
    </>
  )
}
