import { useDatos } from '../../hooks/useDatos'
import { Button, Form, FormControl, Table } from 'react-bootstrap';
import { ApiGetUsuario } from '../../apis/AdminApis';
import { useEffect, useState } from 'react';
import { EliminarUsuarioAlumno } from './CRUD_usuarioAlumno/EliminarUsuarioAlumno';
import { AsignarAulaUsuarioAlumno } from './CRUD_usuarioAlumno/AsignarAulaUsuarioAlumno';
import { AgregarUsuarioAlumno } from './CRUD_usuarioAlumno/AgregarUsuarioAlumno';
import { EditarUsuarioAlumno } from './CRUD_usuarioAlumno/EditarUsuarioAlumno';
import '../../css/flex.css'
import axios from 'axios';

export const TableUsuariosAlumnos = () => {

    const { state } = useDatos(ApiGetUsuario)

    const [showAgregar, setShowAgregar] = useState(false);
    const [showEditar, setShowEditar] = useState(false);

    const [usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado] = useState({})

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

    const [usuarios, setUsuarios]: any = useState([])
    const [tablaUsuario, setTablaUsuario]: any = useState([])
    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios.get(ApiGetUsuario);
            setTablaUsuario(data)
            setUsuarios(data)
        }
        getUser()
    }, [busqueda])

    const handleChange = (e: any) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda: any) => {
        let resultadoBusqueda = tablaUsuario.filter((elemento: any) => {
            if (elemento.Usuario.nombres.includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        })
        setUsuarios(resultadoBusqueda)
    }

    return (
        <>
            <div className='filtro'>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                        value={busqueda}
                        onChange={handleChange}
                    />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
                <Button variant="outline-primary" onClick={() => { seleccionarPais({}, 'Agregar') }}>Agregar</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Apellidos</th>
                        <th>nombres</th>
                        <th>Correo</th>
                        <th>img</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((element: any, i: any) => (
                        <tr key={i++}>
                            <td>{element.idalumnos}</td>
                            <td>{element.Usuario.apellidos}</td>
                            <td>{element.Usuario.nombres}</td>
                            <td>{element.Usuario.correo}</td>
                            <td>{element.Usuario.img}</td>
                            <td>
                                <Button variant="outline-warning" onClick={() => { seleccionarPais(element.Usuario, 'Editar') }}>Editar</Button>{' '}
                                <Button variant="outline-danger" onClick={() => { EliminarUsuarioAlumno(element.Usuario) }}>Eliminar</Button>{' '}
                                <Button variant="outline-success" onClick={() => { AsignarAulaUsuarioAlumno(element) }}>Asignar Aula</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <EditarUsuarioAlumno
                show={showEditar}
                setShow={setShowEditar}
                usuarioAlumnoSeleccionado={usuarioAlumnoSeleccionado}
                setUsuarioAlumnoSeleccionado={setUsuarioAlumnoSeleccionado} />
            <AgregarUsuarioAlumno
                show={showAgregar}
                setShow={setShowAgregar}
                usuarioAlumnoSeleccionado={usuarioAlumnoSeleccionado}
                setUsuarioAlumnoSeleccionado={setUsuarioAlumnoSeleccionado} />
        </>
    )
}
