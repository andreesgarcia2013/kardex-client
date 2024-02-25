import { createContext, useContext, useState } from "react";
import { useAuth } from "../../../auth/context/authContext";
import { materiasRequest, createMateriaRequest, getMateriaRequest, updateMateriaRequest } from "../../../api/manager";


const MateriaContext = createContext();

export const useMateria = () => {
    const context = useContext(MateriaContext);
    if (!context) throw new Error("useMateria must be used within a AlumnoProvider");
    return context;
}

export const MateriaProvider = ({children}) => {
    const {token} = useAuth();
    const [materias, setMaterias] = useState([]);
    const [errors, setErrors] = useState([]);
    

    const getMaterias = async () =>{
        try {
            const res = await materiasRequest(token);
            setMaterias(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createMateria = async (materia, navigate)=> {
      try {
        const res= await createMateriaRequest(materia, token);
        if (res.status===200) {
          setErrors([]);
          navigate(-1);
        }
      } catch (error) {
        console.log(error.response.data);
        setErrors(error.response.data.message);
      }
    }

    const getMateria = async (id_materia)=>{
      try {
        const res = await getMateriaRequest(id_materia, token);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    }

    const updateMateria = async (id_materia, materia, navigate) =>{
      try {
        const res= await updateMateriaRequest(id_materia, materia, token)
        if (res.status===200) {
          setErrors([]);
          navigate(-1);
        }
      } catch (error) {
        console.log(error.response.data);
        setErrors(error.response.data.message);
      }
    }

    return (
        <MateriaContext.Provider
          value={{
            getMaterias,
            materias,
            createMateria,
            getMateria,
            updateMateria,
            errors
          }}
        >
          {children}
        </MateriaContext.Provider>
      );
}