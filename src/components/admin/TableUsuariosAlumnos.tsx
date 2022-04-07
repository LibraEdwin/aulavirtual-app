import { useDatos } from '../../hooks/useDatos'
import { Button, Form, FormControl, Table } from 'react-bootstrap';
import { ApiGetUsuario } from '../../apis/AdminApis';
import { useState } from 'react';
import { EliminarUsuarioAlumno } from './CRUD_usuarioAlumno/EliminarUsuarioAlumno';
import { AsignarAulaUsuarioAlumno } from './CRUD_usuarioAlumno/AsignarAulaUsuarioAlumno';
import { AgregarUsuarioAlumno } from './CRUD_usuarioAlumno/AgregarUsuarioAlumno';
import { EditarUsuarioAlumno } from './CRUD_usuarioAlumno/EditarUsuarioAlumno';

export const TableUsuariosAlumnos = () => {

    const { state } = useDatos(ApiGetUsuario)

    const [show, setShow] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado]: any = useState({})

    const seleccionarPais = (element: {} | any) => {
        setUsuarioAlumnoSeleccionado(element)
        setShow(true)
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
                <Button variant="outline-primary" onClick={() => { setShow(true) }}>Agregar</Button>
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
                                <Button variant="outline-warning" onClick={() => { seleccionarPais(element.Usuario) }}>Editar</Button>{' '}
                                <Button variant="outline-danger" onClick={() => { EliminarUsuarioAlumno(element.Usuario) }}>Eliminar</Button>{' '}
                                <Button variant="outline-success" onClick={() => { AsignarAulaUsuarioAlumno(element) }}>Asignar Aula</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <EditarUsuarioAlumno
                show={show}
                setShow={setShow}
                usuarioAlumnoSeleccionado={usuarioAlumnoSeleccionado}
                setUsuarioAlumnoSeleccionado={setUsuarioAlumnoSeleccionado} />
            <AgregarUsuarioAlumno
                show={show}
                setShow={setShow}
                usuarioAlumnoSeleccionado={usuarioAlumnoSeleccionado}
                setUsuarioAlumnoSeleccionado={setUsuarioAlumnoSeleccionado} />
        </>
    )
}
