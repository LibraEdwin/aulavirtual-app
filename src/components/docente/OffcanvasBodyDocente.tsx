import { ListGroup, Offcanvas } from 'react-bootstrap'
import { CerrarSecion } from '../CerrarSecion'

export const OffcanvasBodyDocente = () => {
    return (
        <Offcanvas.Body>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <CerrarSecion />
            </ListGroup>
        </Offcanvas.Body>
    )
}
