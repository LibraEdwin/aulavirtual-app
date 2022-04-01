import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from '../layouts/Header';
import { AdminBody } from '../layouts/AdminBody';
import { DocenteBody } from '../layouts/DocenteBody';
import { AlumnoBody } from '../layouts/AlumnoBody';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Main = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.get('correo')) {
            navigate('/login')
        }
    }, []);

    const rol = cookies.get('rol')

    return (
        <div>
            <Header />
            {(rol === "ADMIN" && <AdminBody/> || (rol === "DOCENTE" && <DocenteBody />)) || (rol === "ALUMNO" && <AlumnoBody />)}
        </div>
    )
}