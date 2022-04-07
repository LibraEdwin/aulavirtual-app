import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios';
import { ApiPutUsuarioAlumnos } from '../../../apis/AdminApis';
import { aviso } from './Aviso';

export const EditarUsuarioAlumno = ({ show, setShow, usuarioAlumnoSeleccionado, setUsuarioAlumnoSeleccionado }: any) => {

  const handleImputChange = (e: string | any) => {
    setUsuarioAlumnoSeleccionado({
      ...usuarioAlumnoSeleccionado,
      [e.target.name]: e.target.value
    });
  }

  const NuevaData = {
    nombres: usuarioAlumnoSeleccionado.nombres,
    apellidos: usuarioAlumnoSeleccionado.apellidos,
    correo: usuarioAlumnoSeleccionado.correo,
    contraseña: usuarioAlumnoSeleccionado.contraseña,
    img: usuarioAlumnoSeleccionado.img
  }

  const Boton = async () => {
    await axios.put(ApiPutUsuarioAlumnos + usuarioAlumnoSeleccionado.idusuarios, NuevaData)
    setShow(false)
    aviso()
  }

  return (
    <Modal
      show={show}
      onHide={() => { setShow(false) }}
      centered>
      <Modal.Header>
        <Modal.Title>Editar</Modal.Title>
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
        <Button variant="secondary" onClick={() => { Boton() }}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
