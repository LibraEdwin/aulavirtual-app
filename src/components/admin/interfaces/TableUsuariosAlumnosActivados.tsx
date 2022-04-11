import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AsignarAulaUsuarioAlumno } from '../CRUD_usuarioAlumno/AsignarAulaUsuarioAlumno';
import { Agregar } from '../Agregar';
import '../../../css/componentes.css'
import { BusquedaUsuarioAlumno } from '../CRUD_usuarioAlumno/BusquedaUsuarioAlumno';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUserEdit, faUserMinus, faUserPlus, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { registroUsuarioAlumno } from '../../../apis/AdminApis';
import { editDelete } from '../editDelete';
import { Editar } from '../Editar';

export const TableUsuariosAlumnosActivados = () => {

    const [usuarios, setUsuarios]: any = useState([])
    const [tablaUsuario, setTablaUsuario]: any = useState([])
    const [busqueda, setBusqueda] = useState('')

    const [showAgregar, setShowAgregar] = useState(false);
    const [showEditar, setShowEditar] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado] = useState({})

    const mostrarUsuarios = async () => {
        const { data } = await axios.get(registroUsuarioAlumno.getAlumnosActivados);
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
            case 'Agregar':
                setUsuarioAlumnoSeleccionado(element)
                setShowAgregar(true)
                break;
        }
    }

    return (
        <>
            <div className='filtro grupoBarra'>
                <div className='filtro barra'>
                    <BusquedaUsuarioAlumno
                        setUsuarios={setUsuarios}
                        tablaUsuario={tablaUsuario}
                        busqueda={busqueda}
                        setBusqueda={setBusqueda} />
                </div>
                <div className='BotonAgregar'>
                    <Button
                        className='boton'
                        variant="primary"
                        onClick={() => {
                            seleccionarPais({}, 'Agregar')
                            mostrarUsuarios()
                        }}>
                        <FontAwesomeIcon icon={faUserPlus} />{' '}Agregar
                    </Button>
                    <NavLink to='/registroUsuariosAlumnosDesactivados'>
                        <Button
                            className='boton'
                            variant="dark">
                            <FontAwesomeIcon icon={faUserSlash} />{' '}Desabilitados
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
                                    variant="success"
                                    onClick={() => { AsignarAulaUsuarioAlumno(element, mostrarUsuarios) }}>
                                    <FontAwesomeIcon icon={faSchool} />{' '}Asignar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="warning"
                                    onClick={() => {
                                        seleccionarPais(element.Usuario, 'Editar')
                                        mostrarUsuarios()
                                    }}>
                                    <FontAwesomeIcon icon={faUserEdit} />{' '}Editar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="secondary"
                                    onClick={() => {
                                        editDelete(
                                            mostrarUsuarios,
                                            registroUsuarioAlumno.putDesactivar + element.Usuario.idusuarios,
                                            'DESABILITAR',
                                            `Estas seguro de desabilitar al alumno: ${element.Usuario.apellidos} ${element.Usuario.nombres}!`,
                                            'warning',
                                            'Editar'
                                        )
                                        mostrarUsuarios()
                                    }}>
                                    <FontAwesomeIcon icon={faUserMinus} />{' '}Desavilitar
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
            <Agregar
                show={showAgregar}
                setShow={setShowAgregar}
                state={usuarioAlumnoSeleccionado}
                setState={setUsuarioAlumnoSeleccionado}
                mostrarUsuarios={mostrarUsuarios} />
        </>
    )
}
