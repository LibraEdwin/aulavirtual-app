import { useEffect, useState } from 'react';
import { Agregar } from '../Agregar';
import { Busqueda } from '../Busqueda';
import axios from 'axios';
import { Editar } from '../Editar';
import { BotonesExtra } from '../BotonesExtra';
import { Button, Table, Row, Col, Stack } from 'react-bootstrap';
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
    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado]: any = useState({})

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

    const [id, setId] = useState('')
    const [text, setText] = useState('')
    const [idusuario, setIdusuario] = useState('')

    const seleccionarPais = (element: any, caso: string) => {
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
                setId(element.idalumnos)
                setIdusuario(element.Usuario.idusuarios)
                setShowEliminar(true)
                setOperacion('Eliminar')
                setApi(registroUsuarioAlumno.deleteAlumnos)
                setText(`${element.Usuario.apellidos} ${element.Usuario.nombres}`)
                break;
            case 'Desabilitar':
                setId(element.idalumnos)
                setIdusuario(element.Usuario.idusuarios)
                setShowEliminar(true)
                setOperacion('Desabilitar')
                setApi(registroUsuarioAlumno.putDesactivar)
                setText(`${element.Usuario.apellidos} ${element.Usuario.nombres}`)
                break;
            case 'Habilitar':
                setId(element.idalumnos)
                setIdusuario(element.Usuario.idusuarios)
                setShowEliminar(true)
                setOperacion('Habilitar')
                setApi(registroUsuarioAlumno.putActivar)
                setText(`${element.Usuario.apellidos} ${element.Usuario.nombres}`)
                break;
            case 'Asignar':
                setId(element.idalumnos)
                setIdusuario(element.Usuario.idusuarios)
                setShowEliminar(true)
                setOperacion('Asignar')
                setApi(registroUsuarioAlumno.putAsignar)
                setText(`${element.Usuario.apellidos} ${element.Usuario.nombres}`)
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
            <Row className="justify-content-md-center boton">
                <Col md='8'>
                    <div >
                        <Busqueda
                            busqueda={busqueda}
                            setBusqueda={setBusqueda}
                            filtrar={filtrar} />
                    </div>
                </Col>
                <Col md='4' className="justify-content-md-right">
                    {(estado && (
                        <div>
                            <Button
                                className='botonBarra'
                                variant="dark"
                                onClick={() => {
                                    setEstado(false)
                                    registroDesactivados()
                                }}>
                                <FontAwesomeIcon icon={faUserSlash} />{' '}Desabilitados
                            </Button>
                            <Button
                                className='botonBarra'
                                variant="primary"
                                onClick={() => {
                                    seleccionarPais({}, 'Agregar')
                                    registroActivados()
                                }}>
                                <FontAwesomeIcon icon={faUserPlus} />{' '}Agregar
                            </Button>
                        </div>
                    )) || (!estado && (
                        <div >
                            <Button
                                variant="dark"
                                onClick={() => {
                                    setEstado(true)
                                    registroActivados()
                                }}>
                                <FontAwesomeIcon icon={faUser} />{' '}Habilitados
                            </Button>
                        </div>
                    ))}
                </Col>
            </Row>
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
                                                seleccionarPais(element, 'Asignar')
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
                api={api}
                id={id}
                text={text}
                idusuario={idusuario} />
        </>
    )
}
