import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Cookies from 'universal-cookie';

import '../css/login.css'

const cookies = new Cookies()

const email = 'edwin'
const passwor = '123456'

export const FormLogin = () => {

    const [imput, setImput]: any = useState({})

    const handleImputChange = (e: any) => {
        setImput({
            ...imput,
            [e.target.name]: e.target.value
        });
    }


    const iniciarSesion = () => {

        if (email == imput.email && passwor == imput.password) {

            cookies.set('email', email, { path: '/' })

            alert('bienvenido')
        } else {
            alert('Usuario o contraseña incorrecta')
        }
    }

    return (
        <Form className='formLogin 	col-10 mb-sm-10 col-md-6 col-lg-5 col-xl-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text className="text-muted">
                    <h3 className='h3Colegio'> I.E.P. Pedro Ruiz Gallo </h3>
                </Form.Text>
            </Form.Group>
            <img alt='insignea' className='col-4' src={require('../assets/icons/insignea.png')} />
            <div className='divImput'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type='text'
                        placeholder="Email"
                        name="email"
                        onChange={handleImputChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange={handleImputChange} />
                </Form.Group>
                <Button variant="primary" className='btnLogin' value="Login" onClick={() => { iniciarSesion() }}> Acceder </Button>
            </div>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text className="text-muted">
                    Aula Virtual
                </Form.Text>
            </Form.Group>
        </Form>
    )
}
