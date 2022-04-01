import React from 'react'
import { ListGroup, Offcanvas } from 'react-bootstrap'

export const OffcanvasBodyDocente = () => {
    return (
        <Offcanvas.Body>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Offcanvas.Body>
    )
}
