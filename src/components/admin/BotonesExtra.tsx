import { Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios';
import { aviso } from '../Aviso';

export const BotonesExtra = ({ show, setShow, state, mostrarUsuarios, operacion, api }: any) => {

    let nombre = null
    let apellidos = null
    let id = ''
    let idusuario = ''

    if (show) {
        nombre = state.Usuario.nombres
        apellidos = state.Usuario.apellidos
        id = state.idalumnos
        idusuario = state.Usuario.idusuarios
    }

    const Boton = async (operacion: string) => {
        switch (operacion) {
            case 'Desabilitar':
                await axios.put(api + idusuario)
                mostrarUsuarios()
                setShow(false)
                aviso()
                break;
            case 'Eliminar':
                await axios.delete(api + id)
                mostrarUsuarios()
                setShow(false)
                aviso()
                break;
            case 'Habilitar':
                await axios.put(api + idusuario)
                mostrarUsuarios()
                setShow(false)
                aviso()
                break;
        }
    }

    return (
        <Modal
            show={show}
            onHide={() => { setShow(false) }}
            centered>
            <Modal.Header>
                <Modal.Title>{operacion}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group >
                        <Form.Label>Seguro de {operacion} a {apellidos + ' ' + nombre}</Form.Label>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { Boton(operacion) }}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
