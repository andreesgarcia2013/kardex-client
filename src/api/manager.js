import { useAuth } from "../auth/context/authContext";
import axios from "./axios";

const prefix = '/manager'
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

export const adminsRequest = async (token) => axios.get(`${prefix}/admin/admins`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

export const materiasRequest = async (token) => axios.get(`${prefix}/materia/materias`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});