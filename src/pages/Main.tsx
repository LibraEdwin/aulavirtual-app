import React, { useEffect } from 'react'
import { AdminHome } from './AdminHome';
import { AlumnoHome } from './AlumnoHome';
import { DocenteHome } from './DocenteHome';
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const cookies = new Cookies()

export const Main = () => {


    const navigate = useNavigate()

    useEffect(() => {
        if (!cookies.get('correo')) {
            navigate('/')
        }
    }, []);

    const rol = cookies.get('rol')

    const Cerrar = () => {
        navigate('/')
        cookies.remove('id', { path: '/' })
        cookies.remove('nombres', { path: '/' })
        cookies.remove('correo', { path: '/' })
        cookies.remove('rol', { path: '/' })
    }

    return (
        <div>
            {(rol === "ADMIN" && <AdminHome />) || (rol === "DOCENTE" && <DocenteHome />) || (rol === "ALUMNO" && <AlumnoHome />)}
            <Button onClick={() => { Cerrar() }}>Salir</Button>
        </div>
    )
}