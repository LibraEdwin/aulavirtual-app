import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

export const ModalUsuario = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="outline-primary" onClick={() => { setShow(true) }}>Agregar</Button>
            <Modal
                show={show}
                onHide={() => { setShow(false) }}
                centered>
                <Modal.Header>
                    <Modal.Title>Agregar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Control type="text" placeholder="Nombres" />
                            <Form.Control type="text" placeholder="Apellidos" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={() => { setShow(false) }}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
