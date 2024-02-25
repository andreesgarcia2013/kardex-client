import { createContext, useContext, useState } from "react";
import { alumnosRequest, createAlumnoRequest, getAlumnoRequest, getCarrerasRequest, updateAlumnoRequest } from "../../../api/manager";
import { useAuth } from "../../../auth/context/authContext";

const AlumnoContext = createContext();

export const useAlumno = () => {
    const context = useContext(AlumnoContext);
    if (!context) throw new Error("useAlumno must be used within a AlumnoProvider");
    return context;
}


export const AlumnoProvider = ({children}) => {
    const {user, token} = useAuth();
    const [alumnos, setAlumnos] = useState([]);
    const [carreras, setCarreras] = useState([]);
    const [errors, setErrors] = useState([]);

    const getAlumnos = async () =>{
        try {
            const res = await alumnosRequest(token);
            setAlumnos(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createAlumno = async (alumno, navigate)=> {
      try {
        const res= await createAlumnoRequest(alumno, token);
        if (res.status===200) {
          setErrors([]);
          navigate(-1);
        }
      } catch (error) {
        console.log(error.response.data);
        setErrors(error.response.data.message);
      }
    }

    const getAlumno = async (id_alumno)=>{
      try {
        const res = await getAlumnoRequest(id_alumno, token);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    }

    const updateAlumno = async (id_alumno, alumno, navigate) =>{
      try {
        const res= await updateAlumnoRequest(id_alumno, alumno, token)
        if (res.status===200) {
          setErrors([]);
          navigate(-1);
        }
      } catch (error) {
        console.log(error.response.data);
        setErrors(error.response.data.message);
      }
    }

    const getCarreras=async()=>{
      try {
        const res = await getCarrerasRequest(token);
        setCarreras(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <AlumnoContext.Provider
          value={{
            alumnos,
            errors,
            getAlumnos,
            createAlumno,
            getAlumno,
            updateAlumno,
            getCarreras,
            carreras
          }}
        >
          {children}
        </AlumnoContext.Provider>
      );
}

