import axios from 'axios';
import { Button, Modal } from 'react-bootstrap'
import { registroUsuarioAlumno } from '../../apis/AdminApis';
import { aviso } from '../Aviso';
import { FormAgregarUsuarioAlumno } from './CRUD_usuarioAlumno/FormAgregarUsuarioAlumno';

export const Agregar = ({ show, setShow, state, setState, mostrarUsuarios }: any) => {

  const handleImputChange = (e: string | any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const Boton = async () => {
    await axios.post(registroUsuarioAlumno.PostAlumnos, state)
    setShow(false)
    aviso()
    mostrarUsuarios()
  }

  return (
    <Modal
      show={show}
      onHide={() => { setShow(false) }}
      centered>
      <Modal.Header>
        <Modal.Title>Agregar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormAgregarUsuarioAlumno
          handleImputChange={handleImputChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { Boton() }}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
