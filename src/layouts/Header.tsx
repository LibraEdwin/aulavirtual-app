import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Button, Container, Figure, Navbar, Offcanvas } from 'react-bootstrap'
import { MainHearder } from '../components/MainHearder'
import '../css/encabezado.css'

export const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <Button variant="outline-light" aria-controls="offcanvasNavbar" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <MainHearder />
                </Offcanvas>
            </Container>
        </Navbar>
    )
}
