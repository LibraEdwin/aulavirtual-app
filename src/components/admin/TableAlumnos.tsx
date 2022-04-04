import { useDatos } from '../../hooks/useDatos'
import { Button, Form, FormControl, Table } from 'react-bootstrap';
import { ApiUsuario } from '../../apis/AdminApis';
import { ModalUsuario } from './ModalUsuario';

export const TableAlumnos = () => {

    const { state } = useDatos(ApiUsuario)
    
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
                <ModalUsuario />
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
                {state.map((element: any) =>
                    <tbody>
                        <tr>
                            <td>{element.Usuario.apellidos + ' ' + element.Usuario.nombres}</td>
                            <td>{element.Usuario.correo}</td>
                            <td>{element.Usuario.img}</td>
                            <td>
                                <Button variant="outline-warning">Editar</Button> {' '}
                                <Button variant="outline-danger">Eliminar</Button>
                            </td>
                        </tr>
                    </tbody>
                )}
            </Table>
        </>
    )
}
