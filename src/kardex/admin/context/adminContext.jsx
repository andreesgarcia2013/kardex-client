import { createContext, useContext, useState } from "react";
import { useAuth } from "../../../auth/context/authContext";
import { adminsRequest, createAdminRequest, getAdminRequest, updateAdminRequest } from "../../../api/manager";

const AdminContext = createContext();

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) throw new Error("useAdmin must be used within a AlumnoProvider");
    return context;
}


export const AdminProvider = ({children}) => {
    const {token} = useAuth();
    const [admins, setAdmins] = useState([]);
    const [errors, setErrors] = useState([]);


    const getAdmins = async () =>{
        try {
            const res = await adminsRequest(token);
            setAdmins(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createAdmin = async (admin, navigate)=> {
      try {
        const res= await createAdminRequest(admin, token);
        if (res.status===200) {
          setErrors([]);
          navigate(-1);
        }
      } catch (error) {
        console.log(error.response.data);
        setErrors(error.response.data.message);
      }
    }

    const getAdmin = async (id_admin)=>{
      try {
        const res = await getAdminRequest(id_admin, token);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    }

    const updateAdmin = async (id_admin, admin, navigate) =>{
      try {
        const res= await updateAdminRequest(id_admin, admin, token)
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
        <AdminContext.Provider
          value={{
            getAdmins,
            admins,
            createAdmin,
            getAdmin,
            updateAdmin,
            errors
          }}
        >
          {children}
        </AdminContext.Provider>
      );
}