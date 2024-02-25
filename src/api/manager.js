import { useAuth } from "../auth/context/authContext";
import axios from "./axios";

const prefix = '/manager'

//ALUMNO
export const alumnosRequest = async (token) => axios.get(`${prefix}/alumno/alumnos`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
});

export const createAlumnoRequest = async (alumno, token) => axios.post(`${prefix}/alumno/register`, alumno ,{
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const getAlumnoRequest = async (id, token) => axios.get(`${prefix}/alumno/alumno/${id}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const updateAlumnoRequest = async (id, alumno, token) => axios.patch(`${prefix}/alumno/update/${id}`, alumno ,{
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

//ADMIN
export const adminsRequest = async (token) => axios.get(`${prefix}/admin/admins`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const createAdminRequest = async (admin, token) => axios.post(`${prefix}/admin/register`, admin ,{
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const getAdminRequest = async (id, token) => axios.get(`${prefix}/admin/admin/${id}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const updateAdminRequest = async (id, admin, token) => axios.patch(`${prefix}/admin/update/${id}`, admin ,{
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

//MATERIAS

export const materiasRequest = async (token) => axios.get(`${prefix}/materia/materias`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const createMateriaRequest = async (materia, token) => axios.post(`${prefix}/materia/register`, materia ,{
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const getMateriaRequest = async (id, token) => axios.get(`${prefix}/materia/materia/${id}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const updateMateriaRequest = async (id, materia, token) => axios.patch(`${prefix}/materia/update/${id}`, materia ,{
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

//KARDEX

export const getKardexRequest = async (id, token) => axios.get(`${prefix}/kardex/kardex/${id}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const createKardexRequest = async (kardex, token) => axios.post(`${prefix}/kardex/register`, kardex ,{
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const getPdfKardexRequest = async (id_alumno, token) => axios.get(`${prefix}/kardex/kardex-pdf/${id_alumno}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  },
  responseType: 'blob'
});


//CARRERAS
export const getCarrerasRequest = async (token) => axios.get(`${prefix}/carreras/`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

