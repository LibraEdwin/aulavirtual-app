import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Figure, Navbar, Offcanvas } from 'react-bootstrap'
import { MainHearder } from '../components/MainHearder'
import '../css/encabezado.css'

export const Header = () => {

    return (
        <Navbar bg="black" expand={false}>
            <Container>
                <Navbar.Brand>
                    <div className='divEncabezado'>
                        <div className='divImg'>
                            <Figure>
                                <Figure.Image
                                    width={57}
                                    height={68.84}
                                    alt="57x68.84"
                                    src={require('../assets/icons/insignea.png')}
                                />
                            </Figure>
                        </div>
                        <div className='divIE'>
                            I.E. Pedro Ruiz Gallo
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle >
                    <Button variant="outline-light" aria-controls="offcanvasNavbar">
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end">
                    <Offcanvas.Header>
                        <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                    </Offcanvas.Header>
                    <MainHearder />
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
