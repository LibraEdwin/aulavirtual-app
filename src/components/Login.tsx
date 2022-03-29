import React from 'react'
import { Button, Form } from 'react-bootstrap'

import '../css/login.css'

export const Login = () => {

    return (
        <div id="bg">
            <Form className='formLogin 	col-10 mb-sm-10 col-md-6 col-lg-5 col-xl-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                        <h3 className='h3Colegio'> I.E.P. Pedro Ruiz Gallo </h3>
                    </Form.Text>
                </Form.Group>
                <img alt='insignea' className='col-4' src={require('../assets/icons/insignea.png')} />
                <div className='divImput'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email"
                            name="lEmail" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña"
                            name="lPassword" />
                    </Form.Group>
                    <Button type="submit" variant="primary" className='btnLogin' value="Login" > Acceder </Button>
                </div>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                        Aula Virtual
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}
