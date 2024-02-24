import axios from "./axios";

export const pdfKardexRequest = async (id_alumno, token) => axios.get(`alumno/kardex-pdf/${id_alumno}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
    responseType: 'blob'
});


export const kardexRequest = async (id_alumno, token) => axios.get(`alumno/kardex/${id_alumno}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
});

