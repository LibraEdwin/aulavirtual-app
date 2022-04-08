import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, FormControl } from 'react-bootstrap'
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
            <div className='buscador'>
                <FormControl
                    type="search"
                    className="me-2"
                    aria-label="Search"
                    value={busqueda}
                    onChange={handleChange} />

            </div>
            <div className="botonBuscar">
                <Button
                    className='boton'
                    variant="secondary"
                    onClick={() => { filtrar(busqueda) }}>
                    <FontAwesomeIcon icon={faSearch} />{' '}Buscar
                </Button>
            </div>
        </>
    )
}
