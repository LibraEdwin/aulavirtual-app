import { Form } from 'react-bootstrap'

export const FormAgregarUsuarioAlumno = ({ handleImputChange }: any) => {
    return (
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
