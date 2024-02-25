import React, { useEffect, useState } from 'react'
import { Kardex } from '../../components/Kardex';
import { useAlumno } from '../context/alumnoContext';
import { useParams } from 'react-router-dom';
import { useMateria } from '../context/materiaContext';
import { useKardex } from '../context/kardexContext';

export const KardexLab = () => {

  const {getAlumno} = useAlumno();
  const params = useParams();
  const [alumno, setAlumno] = useState({});
  const [materiasDisponibles, setMateriasDisponibles] = useState({});

  useEffect(() => {
    const loadKardexData = async()=>{
      const res=await getAlumno(params.id_alumno);
      setAlumno({
        "nombre":res.data.usuario.nombre
      })
      
    }
    loadKardexData();
  }, []);

  return (
    <div className='m-5'>
      <div className='pb-5'>
        <h1 className='text-xl font-bold' >Kardex de {alumno.nombre}</h1>
      </div>
      <div >
        <Kardex/>
      </div>
    </div>
  )
}
