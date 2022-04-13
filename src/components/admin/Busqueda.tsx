import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, FormControl, Row, Stack } from 'react-bootstrap'
import '../../css/barraBuscadora.css'

export const Busqueda = ({ busqueda, setBusqueda, filtrar }: any) => {

    const handleChange = (e: any) => {
        setBusqueda(e.target.value)
        filtrar('')
    }

    return (
        <>
            <Row className="justify-content-md-center">
                <Col md='10'>
                    <FormControl
                        type="search"
                        className="me-2"
                        aria-label="Search"
                        value={busqueda}
                        onChange={handleChange} />
                </Col>
                <Col md='2'>
                    <Button
                        variant="outline-secondary"
                        onClick={() => { filtrar(busqueda) }}>
                        <FontAwesomeIcon icon={faSearch} />{' '}Buscar
                    </Button>
                </Col>
            </Row>
        </>
    )
}
