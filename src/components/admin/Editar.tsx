import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios';
import { registroUsuarioAlumno } from '../../apis/AdminApis';
import { aviso } from '../Aviso';
import { FormEditarUsuarioAlumno } from './CRUD_usuarioAlumno/FormEditarUsuarioAlumno';

export const Editar = ({ show, setShow, state, setState, mostrarUsuarios }: any) => {

  const handleImputChange = (e: string | any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const NuevaData = {
    nombres: state.nombres,
    apellidos: state.apellidos,
    correo: state.correo,
    contraseña: state.contraseña,
    img: state.img
  }

  const Boton = async () => {
    await axios.put(registroUsuarioAlumno.PutAlumnos + state.idusuarios, NuevaData)
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
        <Modal.Title>Editar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormEditarUsuarioAlumno 
        handleImputChange={handleImputChange}
        state={state}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { Boton() }}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
