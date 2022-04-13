import { Button, Col, Figure, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { CerrarSecion } from './CerrarSecion';

const cookies = new Cookies()

export const Home = () => {
  return (
    <Row className="justify-content-md-center RowPerfil">
        <Col sm={5} className='perfilTextCenter'>
          <Figure className='FigurePerfil'>
            <Figure.Image
              className='perfil'
              src={require('../assets/img/perfil.jpeg')}
            />
            <Figure.Caption>
              <Form.Label className='perfilNombres'>{cookies.get('nombres')}</Form.Label>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm={7} className='perfilText'>
          <Row >
            <Col>
              <Form.Label className='perfilCorreo '>{cookies.get('correo')}</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className='perfilRol'>{cookies.get('rol')}</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <NavLink to='/'>
                <Button variant="outline-primary">HOME</Button>
              </NavLink>
                {' '}<Button variant="outline-warning">EDITAR PERFIL</Button>{' '}
                <CerrarSecion />
            </Col>
          </Row>
        </Col>
      </Row>
  )
}
