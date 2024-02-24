import { useEffect, useState } from "react";
import { Profile } from '../../components/Profile'

import { AiOutlineDownload} from 'react-icons/ai';
import { DataTable } from '../../components/DataTable';
import { useAuth } from '../../../auth/context/authContext';

import { pdfKardexRequest, kardexRequest } from "../../../api/alumno";


export const KardexPage = () => {

  
  const {user, token} = useAuth();

  const [kardex, setKardex] = useState([]);
  const [promedio, setPromedio] = useState(0);
  
  const {alumnoData}=user;

  const getKardex= async  () =>{
    try {
      await kardexRequest(alumnoData.id_alumno, token).then((response)=>{
        setPromedio(response.data.data.promedio)
        setKardex(response.data.data.kardex);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getKardex();
  }, []);

  const download= async () => {
    try {
      const response = await pdfKardexRequest(alumnoData.id_alumno, token);  
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
  
      // Crear un enlace y simular clic para iniciar la descarga
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'archivo.pdf');
      document.body.appendChild(link);
      link.click();
  
      // Liberar recursos después de la descarga
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
    }
    
  }

    const alumnoInfo = {
        nombre: user.nombre,
        matricula: alumnoData.matricula,
        grado: alumnoData.grado,
        carrera: alumnoData.carrera.carrera,
        promedio: promedio,
    };

    const headers = ['CÓDIGO', 'MATERIA', 'GRADO', 'CALIFICACIÓN'];

    const data = kardex.map((itemKardex) => [
      itemKardex.materia.codigo,
      itemKardex.materia.materia,
      itemKardex.materia.grado,
      itemKardex.calificacion
    ]);

  return (
    <>
        <div className='bg-gray-200 rounded-md m-5 p-5 '>
            <Profile alumno={alumnoInfo} />
        </div>
        <div className='flex justify-end m-5'>
        <button onClick={download} className="flex flex-row bg-green-300 text-black rounded-md px-5 py-2  items-center" >
            <AiOutlineDownload/>Descargar
        </button>
        </div>
        <div className='overflow-x-scroll shadow-md sm:rounded-lg m-5'>
            <DataTable headers={headers} data={data} />
        </div>
    </>
  )
}
