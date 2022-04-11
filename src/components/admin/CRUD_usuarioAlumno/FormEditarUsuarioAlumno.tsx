import { Form } from 'react-bootstrap'

export const FormEditarUsuarioAlumno = ({ handleImputChange, state }: any) => {
  return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Control
                type="text"
                placeholder="Nombres"
                name="nombres"
                onChange={handleImputChange}
                value={state && state.nombres} />

        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control
                type="text"
                placeholder="Apellidos"
                name="apellidos"
                onChange={handleImputChange}
                value={state && state.apellidos} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control
                type="Email"
                placeholder="Correo"
                name="correo"
                onChange={handleImputChange}
                value={state && state.correo} />
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
  )
}
