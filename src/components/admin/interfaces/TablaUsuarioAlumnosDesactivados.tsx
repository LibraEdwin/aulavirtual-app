import { Button, Table, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Editar } from '../Editar';
import '../../../css/componentes.css'
import { BusquedaUsuarioAlumno } from '../CRUD_usuarioAlumno/BusquedaUsuarioAlumno';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCheck, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { registroUsuarioAlumno } from '../../../apis/AdminApis';
import { editDelete } from '../editDelete';

export const TablaUsuarioAlumnosDesactivados = () => {

    const [usuarios, setUsuarios]: any = useState([])
    const [tablaUsuario, setTablaUsuario]: any = useState([])
    const [busqueda, setBusqueda] = useState('')

    const [showEditar, setShowEditar] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado] = useState({})

    const mostrarUsuarios = async () => {
        const { data } = await axios.get(registroUsuarioAlumno.getAlumnosDesactivados);
        setTablaUsuario(data)
        setUsuarios(data)
    }

    useEffect(() => {
        mostrarUsuarios()
    }, [])


    const seleccionarPais = (element: {}, caso: string) => {
        switch (caso) {
            case 'Editar':
                setUsuarioAlumnoSeleccionado(element)
                setShowEditar(true)
                break;
        }
    }

    return (
        <Container>
            <div className='filtro grupoBarra'>
                <div className='filtro barra'>
                    <BusquedaUsuarioAlumno
                        setUsuarios={setUsuarios}
                        tablaUsuario={tablaUsuario}
                        busqueda={busqueda}
                        setBusqueda={setBusqueda} />
                </div>
                <div className='BotonAgregar'>
                    <NavLink to='/registroUsuariosAlumnos'>
                        <Button
                            className='boton'
                            variant="dark">
                            <FontAwesomeIcon icon={faUser} />{' '}Alumnos
                        </Button>
                    </NavLink>
                </div>
            </div>
            <Table striped bordered hover className='tabla'>
                <thead>
                    <tr>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>img</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((element: any, i: any) => (
                        <tr key={i++}>
                            <td>{element.Usuario.apellidos + ' ' + element.Usuario.nombres}</td>
                            <td>{element.Usuario.correo}</td>
                            <td>{element.Usuario.img}</td>
                            <td>
                                <Button
                                    className='boton'
                                    variant="info"
                                    onClick={() => {
                                        editDelete(
                                            mostrarUsuarios,
                                            registroUsuarioAlumno.putActivar + element.Usuario.idusuarios,
                                            'ACTIVAR',
                                            `Estas seguro de HABILITAR al alumno: ${element.Usuario.apellidos} ${element.Usuario.nombres}!`,
                                            'info',
                                            'Editar'
                                        )
                                    }}>
                                    <FontAwesomeIcon icon={faUserCheck} />{' '}Habilitar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="warning"
                                    onClick={() => {
                                        seleccionarPais(element.Usuario, 'Editar')
                                    }}>
                                    <FontAwesomeIcon icon={faUserEdit} />{' '}Editar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="danger"
                                    onClick={() => {
                                        editDelete(
                                            mostrarUsuarios,
                                            registroUsuarioAlumno.deletAlumnos + element.idalumnos,
                                            'ELIMINAR',
                                            `Estas seguro de ELIMINAR al alumno: ${element.Usuario.apellidos} ${element.Usuario.nombres}!`,
                                            'error',
                                            'Eliminar'
                                        )
                                    }}>
                                    <FontAwesomeIcon icon={faUserTimes} />{' '}Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Editar
                show={showEditar}
                setShow={setShowEditar}
                state={usuarioAlumnoSeleccionado}
                setState={setUsuarioAlumnoSeleccionado}
                mostrarUsuarios={mostrarUsuarios} />
        </Container>
    )
}
