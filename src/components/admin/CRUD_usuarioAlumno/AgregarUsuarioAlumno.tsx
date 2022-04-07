import axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap'
import { ApiPostUsuarioAlumnos } from '../../../apis/AdminApis';
import { aviso } from '../../Aviso';

export const AgregarUsuarioAlumno = ({ show, setShow, usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado, getUser }: any) => {

  const handleImputChange = (e: string | any) => {
    setUsuarioAlumnoSeleccionado({
      ...usuarioAlumnoSeleccionado,
      [e.target.name]: e.target.value
    });
  }

  const Boton = async () => {
    await axios.post(ApiPostUsuarioAlumnos, usuarioAlumnoSeleccionado)
    setShow(false)
    aviso()
    getUser()
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
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Nombres"
              name="nombres"
              onChange={handleImputChange} />

          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Apellidos"
              name="apellidos"
              onChange={handleImputChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="Email"
              placeholder="Correo"
              name="correo"
              onChange={handleImputChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="file"
              name="img"
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
        <Button variant="secondary" onClick={() => { Boton() }}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
