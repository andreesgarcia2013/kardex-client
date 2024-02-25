import { createContext, useContext, useState } from "react";
import { useAuth } from "../../../auth/context/authContext";
import { createKardexRequest, getKardexRequest, materiasRequest } from "../../../api/manager";
import { useMateria } from "./materiaContext";


const KardexContext = createContext();

export const useKardex = () => {
    const context = useContext(KardexContext);
    if (!context) throw new Error("useKardex must be used within a KardexProvider");
    return context;
}

export const KardexProvider = ({ children }) => {

    const { token } = useAuth();
    const [errors, setErrors] = useState([]);

    const getKardex = async (id_alumno) => {
        try {
            const resKardex = await getKardexRequest(id_alumno, token);
            const resMateria = await materiasRequest(token);
            const materias = resMateria.data.data;
            const kardex = resKardex.data.data.kardex
            const materiasDisponibles = materias.filter(materia => !kardex.some(itemKardex => materia.id_materia === itemKardex.id_materia));
            return materiasDisponibles;
        } catch (error) {
            console.error(error);
        }
    }

    const createKardex = async (kardex, navigate) => {
        try {
            const res = await createKardexRequest(kardex, token);
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
        <KardexContext.Provider
            value={{
                getKardex,
                createKardex
            }}
        >
            {children}
        </KardexContext.Provider>
    );
}