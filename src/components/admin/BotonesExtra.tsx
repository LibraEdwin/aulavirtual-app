import { Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios';
import { aviso } from '../Aviso';
import { FormBotonExtraUsuarioAlumno } from './CRUD_usuarioAlumno/FormBotonExtraUsuarioAlumno';

export const BotonesExtra = ({ show, setShow, mostrarUsuarios, operacion, api, id, text, idusuario }: any) => {

    let aula: string
    const eventoAula = (e: any) => {
        aula = e
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
            case 'Asignar':
                if (aula != undefined) {
                    await axios.put(api + id, { aulas_idaulas: aula })
                    mostrarUsuarios()
                    setShow(false)
                    aviso()
                }
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
                <FormBotonExtraUsuarioAlumno
                    operacion={operacion}
                    text={text}
                    eventoAula={eventoAula} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => { Boton(operacion) }}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
