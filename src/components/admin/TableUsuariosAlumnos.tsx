import { Button, Table } from 'react-bootstrap';
import { ApiGetUsuario } from '../../apis/AdminApis';
import { useEffect, useState } from 'react';
import { EliminarUsuarioAlumno } from './CRUD_usuarioAlumno/EliminarUsuarioAlumno';
import { AsignarAulaUsuarioAlumno } from './CRUD_usuarioAlumno/AsignarAulaUsuarioAlumno';
import { AgregarUsuarioAlumno } from './CRUD_usuarioAlumno/AgregarUsuarioAlumno';
import { EditarUsuarioAlumno } from './CRUD_usuarioAlumno/EditarUsuarioAlumno';
import '../../css/flex.css'
import { BusquedaUsuarioAlumno } from './CRUD_usuarioAlumno/BusquedaUsuarioAlumno';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUserEdit, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const TableUsuariosAlumnos = () => {

    const [usuarios, setUsuarios]: any = useState([])
    const [tablaUsuario, setTablaUsuario]: any = useState([])
    const [busqueda, setBusqueda] = useState('')

    const [showAgregar, setShowAgregar] = useState(false);
    const [showEditar, setShowEditar] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado] = useState({})

    const getUser = async () => {
        const { data } = await axios.get(ApiGetUsuario);
        setTablaUsuario(data)
        setUsuarios(data)
    }

    useEffect(() => {
        getUser()
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
            <div className='filtro'>
                <div className='filtro'>
                    <BusquedaUsuarioAlumno
                        setUsuarios={setUsuarios}
                        tablaUsuario={tablaUsuario}
                        busqueda={busqueda}
                        setBusqueda={setBusqueda} />
                </div>
                <Button variant="primary" onClick={() => { seleccionarPais({}, 'Agregar') }}><FontAwesomeIcon icon={faUserPlus} />{' '}Agregar</Button>
            </div>
            <Table striped bordered hover>
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
                            <td>{element.Usuario.apellidos + ' '+element.Usuario.nombres}</td>
                            <td>{element.Usuario.correo}</td>
                            <td>{element.Usuario.img}</td>
                            <td>
                                <Button variant="warning" onClick={() => { seleccionarPais(element.Usuario, 'Editar') }}><FontAwesomeIcon icon={faUserEdit} />{' '}Editar</Button>{' '}
                                <Button variant="danger" onClick={() => { EliminarUsuarioAlumno(element.Usuario, getUser) }}><FontAwesomeIcon icon={faUserMinus} />{' '}Desactivar</Button>{' '}
                                <Button variant="success" onClick={() => { AsignarAulaUsuarioAlumno(element, getUser) }}><FontAwesomeIcon icon={faSchool} />{' '}Asignar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <EditarUsuarioAlumno
                show={showEditar}
                setShow={setShowEditar}
                usuarioAlumnoSeleccionado={usuarioAlumnoSeleccionado}
                setUsuarioAlumnoSeleccionado={setUsuarioAlumnoSeleccionado}
                getUser={getUser} />
            <AgregarUsuarioAlumno
                show={showAgregar}
                setShow={setShowAgregar}
                usuarioAlumnoSeleccionado={usuarioAlumnoSeleccionado}
                setUsuarioAlumnoSeleccionado={setUsuarioAlumnoSeleccionado}
                getUser={getUser} />
        </>
    )
}
