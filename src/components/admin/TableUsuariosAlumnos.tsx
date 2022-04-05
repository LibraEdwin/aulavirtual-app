import { useDatos } from '../../hooks/useDatos'
import { Button, Form, FormControl, Modal, Table } from 'react-bootstrap';
import { ApiGetUsuario, ApiPostUsuarioAlumnos, ApiPutUsuarioAlumnos } from '../../apis/AdminApis';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const TableUsuariosAlumnos = () => {

    const { state } = useDatos(ApiGetUsuario)

    const [show, setShow] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado]: any = useState({})

    const [operador, setOperador] = useState('')

    const seleccionarPais = (element: any, caso = '') => {
        setUsuarioAlumnoSeleccionado(element)
        switch (caso) {
            case 'Editar':
                setOperador('Editar')
                setShow(true)
                break;
            case 'Agregar':
                setOperador('Agregar')
                setShow(true)
                break;
            default:
                setShow(false)
                break;
        }
    }

    const NuevaData = {
        nombres: usuarioAlumnoSeleccionado.nombres,
        apellidos: usuarioAlumnoSeleccionado.apellidos,
        correo: usuarioAlumnoSeleccionado.correo,
        contraseña: usuarioAlumnoSeleccionado.contraseña,
        img: usuarioAlumnoSeleccionado.img
    }

    const handleImputChange = (e: string | any) => {
        setUsuarioAlumnoSeleccionado({
            ...usuarioAlumnoSeleccionado,
            [e.target.name]: e.target.value
        });
    }

    const Boton = async (caso: any) => {
        switch (caso) {
            case 'Editar':
                await axios.put(ApiPutUsuarioAlumnos + usuarioAlumnoSeleccionado.idusuarios, NuevaData)
                setShow(false)
                setUsuarioAlumnoSeleccionado({})
                break;
            case 'Agregar':
                await axios.post(ApiPostUsuarioAlumnos, usuarioAlumnoSeleccionado)
                setShow(false)
                setUsuarioAlumnoSeleccionado({})
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
                <>
                    <Button variant="outline-primary" onClick={() => { seleccionarPais(usuarioAlumnoSeleccionado, 'Agregar') }}>Agregar</Button>
                </>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Apellidos y nombres</th>
                        <th>Correo</th>
                        <th>img</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((element: any, i: any) => (
                        <tr key={i++}>
                            <td>{element.Usuario.apellidos + ' ' + element.Usuario.nombres}</td>
                            <td>{element.Usuario.correo}</td>
                            <td>{element.Usuario.img}</td>
                            <td>
                                <Button variant="outline-warning" onClick={() => { seleccionarPais(element.Usuario, 'Editar') }}>Editar</Button>{' '}
                                <Button variant="outline-danger">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal
                show={show}
                onHide={() => {
                    setUsuarioAlumnoSeleccionado({})
                    setShow(false)
                }}
                centered>
                <Modal.Header>
                    <Modal.Title>{operador}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Nombres"
                                name="nombres"
                                onChange={handleImputChange}
                                value={usuarioAlumnoSeleccionado && usuarioAlumnoSeleccionado.nombres} />

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Apellidos"
                                name="apellidos"
                                onChange={handleImputChange}
                                value={usuarioAlumnoSeleccionado && usuarioAlumnoSeleccionado.apellidos} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="Email"
                                placeholder="Correo"
                                name="correo"
                                onChange={handleImputChange}
                                value={usuarioAlumnoSeleccionado && usuarioAlumnoSeleccionado.correo} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="file"
                                name="img"
                                onChange={handleImputChange}
                                disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="contraseña"
                                onChange={handleImputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { Boton(operador) }}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
