import axios from 'axios';
import { useEffect, useState } from 'react'
import { Button, Form, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { auth } from '../apis/Apis';

import '../css/login.css'

const cookies = new Cookies()

export const FormLogin = () => {


    const navigate = useNavigate()

    useEffect(() => {
        if (
            cookies.get('id') &&
            cookies.get('nombres') &&
            cookies.get('correo') &&
            cookies.get('rol')
        ) {
            navigate('/')
        }
    }, []);

    const [imput, setImput]: any = useState({})

    const handleImputChange = (e: string | any) => {
        setImput({
            ...imput,
            [e.target.name]: e.target.value
        });
    }

    const iniciarSesion = async () => {

        try {

            const { data } = await axios.post(auth, imput)

            cookies.set('id', data.id, { path: '/' })
            cookies.set('nombres', data.nombres, { path: '/' })
            cookies.set('correo', data.correo, { path: '/' })
            cookies.set('rol', data.rol, { path: '/' })

            navigate('/')
        } catch (error) {
            Swal.fire('Inicio de secion', 'usuario o contraseña incorrecta', 'error')
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
                        placeholder="Correo"
                        name="correo"
                        onChange={handleImputChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password"
                        placeholder="Contraseña"
                        name="contraseña"
                        onChange={handleImputChange} />
                </Form.Group>
                <Stack gap={2} className="col-md-13 mx-auto">
                    <Button variant="primary" value="Login" onClick={() => { iniciarSesion() }}> Acceder </Button>
                </Stack>
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
