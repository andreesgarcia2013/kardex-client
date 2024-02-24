import React from 'react'
import { TopTitle } from '../../components/TopTitle';
import { DataTable } from '../../components/DataTable';
import { useNavigate } from 'react-router-dom';

export const AdminPage = () => {
    const navigate=useNavigate()

    const handleNewAdmin = () => {
        navigate('/admins/nuevo')
    };

    const headers = ['ID', 'Nombre', 'Email', 'Acción'];
    const data = [
      ['1', 'Jose Andres', 'admin@example.com', <a href="#">Edit</a>],
    ];

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
