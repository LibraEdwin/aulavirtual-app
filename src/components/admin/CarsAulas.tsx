import { Card, Button, Row, Col } from 'react-bootstrap';
import { ApiGetAula } from '../../apis/AdminApis';
import { useDatos } from '../../hooks/useDatos';

export const CarsAulas = () => {

    const { state } = useDatos(ApiGetAula)

    return (
        <Row className="g-4">
            {state.map((element: any) =>
                <Col sm={4} key={element.idaulas}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={require(`../../assets/img/${element.grado}grado_${element.seccion}.jpg`)} />
                        <Card.Body>
                            <Card.Title><h1>{element.grado + ' ' + element.seccion}</h1></Card.Title>
                            <Button variant="outline-primary">Ingresar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    )
}
