import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, FormControl } from 'react-bootstrap'
import '../../../css/barraBuscadora.css'

export const BusquedaUsuarioAlumno = ({ setUsuarios, tablaUsuario, busqueda, setBusqueda }: any) => {

    const handleChange = (e: any) => {
        setBusqueda(e.target.value)
        filtrar('')
    }

    const filtrar = (terminoBusqueda: any) => {
        let resultadoBusqueda = tablaUsuario.filter((elemento: any) => {
            if (elemento.Usuario.apellidos.includes(terminoBusqueda.toLowerCase())) {
                return elemento
            }
        })
        setUsuarios(resultadoBusqueda)
    }
    return (
        <>
            <Form className="d-flex barra">
                <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    value={busqueda}
                    onChange={handleChange} />
            </Form>
            <Button variant="dark" onClick={() => { filtrar(busqueda) }}><FontAwesomeIcon icon={faSearch} />{' '}Buscar</Button>
        </>
    )
}
