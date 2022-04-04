import { ListGroup, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CerrarSecion } from '../CerrarSecion'

export const OffcanvasBodyAdmin = () => {
    return (
        <Offcanvas.Body>
            <ListGroup>
                <ListGroup.Item action>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <NavLink to='/registroAlumno'>
                        Registro de alumnos
                    </NavLink>
                </ListGroup.Item>
                <ListGroup.Item action>
                    <NavLink to='/asignacionAula'>
                        Asignacion de alumnos
                    </NavLink>
                </ListGroup.Item>
                <CerrarSecion />
            </ListGroup>
        </Offcanvas.Body>
    )
}
