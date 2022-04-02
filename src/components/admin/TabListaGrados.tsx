import React from 'react'
import { Col, Tab, ListGroup } from 'react-bootstrap';
import { TabListaSeccion } from './TabListaSeccion';

export const TabListaGrados = () => {
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Col sm={12}>
                <ListGroup horizontal>
                    <ListGroup.Item action href="#link1">
                        1°
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                        2°
                    </ListGroup.Item>
                </ListGroup>
                <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        <TabListaSeccion />
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        asdsad
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Tab.Container>
    )
}
