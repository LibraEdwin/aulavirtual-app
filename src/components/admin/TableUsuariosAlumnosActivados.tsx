import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AsignarAulaUsuarioAlumno } from './CRUD_usuarioAlumno/AsignarAulaUsuarioAlumno';
import { AgregarUsuarioAlumno } from './CRUD_usuarioAlumno/AgregarUsuarioAlumno';
import { EditarUsuarioAlumno } from './CRUD_usuarioAlumno/EditarUsuarioAlumno';
import '../../css/componentes.css'
import { BusquedaUsuarioAlumno } from './CRUD_usuarioAlumno/BusquedaUsuarioAlumno';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUserEdit, faUserMinus, faUserPlus, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { ApiGetUsuarioAlumnosActivados } from '../../apis/AdminApis';
import { UsuarioAlumnoDesactivar } from './CRUD_usuarioAlumno/putUsuarioAlumno';

export const TableUsuariosAlumnosActivados = () => {
    
    const [usuarios, setUsuarios]: any = useState([])
    const [tablaUsuario, setTablaUsuario]: any = useState([])
    const [busqueda, setBusqueda] = useState('')

    const [showAgregar, setShowAgregar] = useState(false);
    const [showEditar, setShowEditar] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado] = useState({})

    const getUser = async () => {
        const { data } = await axios.get(ApiGetUsuarioAlumnosActivados);
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
                        onClick={() => { seleccionarPais({}, 'Agregar') }}>
                        <FontAwesomeIcon icon={faUserPlus} />{' '}Agregar
                    </Button>
                    <NavLink to='/registroUsuariosAlumnosDesactivados'>
                        <Button
                            className='boton'
                            variant="dark">
                            <FontAwesomeIcon icon={faUserSlash} />{' '}Desavilitados
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
                                    variant="warning"
                                    onClick={() => { seleccionarPais(element.Usuario, 'Editar') }}>
                                    <FontAwesomeIcon icon={faUserEdit} />{' '}Editar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="success"
                                    onClick={() => { AsignarAulaUsuarioAlumno(element, getUser) }}>
                                    <FontAwesomeIcon icon={faSchool} />{' '}Asignar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="danger"
                                    onClick={() => { UsuarioAlumnoDesactivar(element.Usuario, getUser) }}>
                                    <FontAwesomeIcon icon={faUserMinus} />{' '}Desavilitar
                                </Button>
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
