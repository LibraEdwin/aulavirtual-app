import { useEffect, useState } from 'react';
import { AsignarAulaUsuarioAlumno } from '../CRUD_usuarioAlumno/AsignarAulaUsuarioAlumno';
import { Agregar } from '../Agregar';
import { Busqueda } from '../Busqueda';
import axios from 'axios';
import { Editar } from '../Editar';
import { BotonesExtra } from '../BotonesExtra';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUserEdit, faUserMinus, faUserPlus, faUserSlash, faUser, faUserTimes, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import '../../../css/componentes.css'
import { registroUsuarioAlumno } from '../../../apis/AdminApis';

export const TableUsuariosAlumnos = () => {

    //estado de la tabla
    const [estado, setEstado] = useState(true)

    // state y filtro
    const [usuarios, setUsuarios]: any = useState([])
    const [tablaUsuario, setTablaUsuario]: any = useState([])
    const [busqueda, setBusqueda] = useState('')

    //modales
    const [showAgregar, setShowAgregar] = useState(false);
    const [showEditar, setShowEditar] = useState(false);
    const [showEliminar, setShowEliminar] = useState(false)

    //botones extra
    const [operacion, setOperacion] = useState('')
    const [api, setApi] = useState('')

    //captura del imput
    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado] = useState({})

    const registroActivados = async () => {
        const { data } = await axios.get(registroUsuarioAlumno.getAlumnosActivados);
        setTablaUsuario(data)
        setUsuarios(data)
    }

    const registroDesactivados = async () => {
        const { data } = await axios.get(registroUsuarioAlumno.getAlumnosDesactivados);
        setTablaUsuario(data)
        setUsuarios(data)
    }

    const mostrarUsuarios = async () => {
        if (estado) {
            registroActivados()
        } else if (!estado) {
            registroDesactivados()
        }
    }

    useEffect(() => {
        mostrarUsuarios()
    }, [])

    const seleccionarPais = (element: {}, caso: string) => {
        setUsuarioAlumnoSeleccionado(element)
        switch (caso) {
            case 'Editar':
                setShowEditar(true)
                setOperacion('Editar')
                setApi(registroUsuarioAlumno.PutAlumnos)
                break;
            case 'Agregar':
                setShowAgregar(true)
                setOperacion('Agregar')
                setApi(registroUsuarioAlumno.PostAlumnos)
                break;
            case 'Eliminar':
                setShowEliminar(true)
                setOperacion('Eliminar')
                setApi(registroUsuarioAlumno.deleteAlumnos)
                break;
            case 'Desabilitar':
                setShowEliminar(true)
                setOperacion('Desabilitar')
                setApi(registroUsuarioAlumno.putDesactivar)
                break;
            case 'Habilitar':
                setShowEliminar(true)
                setOperacion('Habilitar')
                setApi(registroUsuarioAlumno.putActivar)
                break;
        }
    }

    const filtrar = (terminoBusqueda: any) => {
        let resultadoBusqueda = tablaUsuario.filter((elemento: any) => {
            if (elemento.Usuario.apellidos.includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        })
        setUsuarios(resultadoBusqueda)
    }

    return (
        <>
            {(estado && (<h1>Activado</h1>)) || (!estado && (<h1>Desactivado</h1>))}
            <div className='filtro grupoBarra'>
                <div className='filtro barra'>
                    <Busqueda
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                        filtrar={filtrar} />
                </div>

                {(estado && (
                    <div className='BotonAgregar'>
                        <Button
                            className='boton'
                            variant="primary"
                            onClick={() => {
                                seleccionarPais({}, 'Agregar')
                                registroActivados()
                            }}>
                            <FontAwesomeIcon icon={faUserPlus} />{' '}Agregar
                        </Button>
                        <Button
                            className='boton'
                            variant="dark"
                            onClick={() => {
                                setEstado(false)
                                registroDesactivados()
                            }}>
                            <FontAwesomeIcon icon={faUserSlash} />{' '}Desabilitados
                        </Button>
                    </div>
                )) || (!estado && (
                    <div className='BotonAgregar'>
                        <Button
                            className='boton'
                            variant="dark"
                            onClick={() => {
                                setEstado(true)
                                registroActivados()
                            }}>
                            <FontAwesomeIcon icon={faUser} />{' '}Habilitados
                        </Button>
                    </div>
                ))}

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
                                {(estado && (
                                    <div>
                                        <Button
                                            className='boton'
                                            variant="success"
                                            onClick={() => {
                                                AsignarAulaUsuarioAlumno(
                                                    element,
                                                    mostrarUsuarios
                                                )
                                            }}>
                                            <FontAwesomeIcon icon={faSchool} />{' '}Asignar
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
                                            variant="secondary"
                                            onClick={() => {
                                                seleccionarPais(element, 'Desabilitar')
                                            }}>
                                            <FontAwesomeIcon icon={faUserMinus} />{' '}Desabilitar
                                        </Button>
                                    </div>
                                )) || (!estado && (
                                    <div>
                                        <Button
                                            className='boton'
                                            variant="info"
                                            onClick={() => {
                                                seleccionarPais(element, 'Habilitar')
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
                                        <Button variant="danger" onClick={() => {
                                            seleccionarPais(element, 'Eliminar')
                                        }}>
                                            <FontAwesomeIcon icon={faUserTimes}></FontAwesomeIcon>{' '}Eliminar
                                        </Button>
                                    </div>
                                ))}
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
            <BotonesExtra
                show={showEliminar}
                setShow={setShowEliminar}
                state={usuarioAlumnoSeleccionado}
                mostrarUsuarios={mostrarUsuarios}
                operacion={operacion}
                api={api} />
        </>
    )
}
