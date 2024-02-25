import React, { useEffect } from 'react'
import { TopTitle } from '../../components/TopTitle';
import { DataTable } from '../../components/DataTable';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/adminContext';

export const AdminPage = () => {
    const navigate=useNavigate()

    const {admins, getAdmins} = useAdmin();

    const handleNewAdmin = () => {
        navigate('/admins/nuevo')
    };

    useEffect(() => {
        getAdmins();
    }, []);


    const headers = ['ID', 'Nombre', 'Email', 'Acción'];
    const data = admins.map((admin) => [
        admin.id_usuario,
        admin.nombre,
        admin.email,
        <div className='space-x-2'>
            <button onClick={()=>navigate(`/admins/${admin.id_usuario}`)}>Editar</button>
        </div>
    ]);
    return (
        <>
            <div className='flex justify-between m-5 items-center'>
                <TopTitle title='Administradores'  handle={handleNewAdmin} />
            </div>
            <div className='overflow-x-scroll shadow-md sm:rounded-lg m-5'>
                <DataTable headers={headers} data={data} />
            </div>
        </>
    )
}
