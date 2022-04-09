import { Button, Table, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { AsignarAulaUsuarioAlumno } from './CRUD_usuarioAlumno/AsignarAulaUsuarioAlumno';
import { AgregarUsuarioAlumno } from './CRUD_usuarioAlumno/AgregarUsuarioAlumno';
import { EditarUsuarioAlumno } from './CRUD_usuarioAlumno/EditarUsuarioAlumno';
import '../../css/componentes.css'
import { BusquedaUsuarioAlumno } from './CRUD_usuarioAlumno/BusquedaUsuarioAlumno';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUser, faUserCheck, faUserEdit, faUserMinus, faUserPlus, faUserSlash, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { ApiGetUsuariosAlumnoDesactivados } from '../../apis/AdminApis';
import { UsuarioAlumnoActivar } from './CRUD_usuarioAlumno/putUsuarioAlumno';

export const TablaUsuarioAlumnosDesactivados = () => {

    const [usuarios, setUsuarios]: any = useState([])
    const [tablaUsuario, setTablaUsuario]: any = useState([])
    const [busqueda, setBusqueda] = useState('')

    const [showEditar, setShowEditar] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado] = useState({})

    const getUser = async () => {
        const { data } = await axios.get(ApiGetUsuariosAlumnoDesactivados);
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
                                    onClick={() => { UsuarioAlumnoActivar(element.Usuario, getUser) }}>
                                    <FontAwesomeIcon icon={faUserCheck} />{' '}Activar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="warning"
                                    onClick={() => { seleccionarPais(element.Usuario, 'Editar') }}>
                                    <FontAwesomeIcon icon={faUserEdit} />{' '}Editar
                                </Button>
                                <Button
                                    className='boton'
                                    variant="danger"
                                    onClick={() => { UsuarioAlumnoActivar(element, getUser) }}>
                                    <FontAwesomeIcon icon={faUserTimes} />{' '}Eliminar
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
        </Container>
    )
}
