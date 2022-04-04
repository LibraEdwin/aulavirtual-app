import { ListGroup, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CerrarSecion } from '../CerrarSecion'

export const OffcanvasBodyAlumno = () => {
    return (
        <Offcanvas.Body>
            <ListGroup>
                <ListGroup.Item action>
                    <NavLink to='/'>
                        Calendario
                    </NavLink>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <NavLink to='/evento'>
                        Eventos
                    </NavLink>
                </ListGroup.Item>
                <CerrarSecion />
            </ListGroup>
        </Offcanvas.Body>
    )
}
