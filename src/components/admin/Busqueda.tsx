import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, FormControl } from 'react-bootstrap'
import '../../css/barraBuscadora.css'

export const Busqueda = ({ busqueda, setBusqueda, filtrar }: any) => {

    const handleChange = (e: any) => {
        setBusqueda(e.target.value)
        filtrar('')
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
                    variant="outline-secondary"
                    onClick={() => { filtrar(busqueda) }}>
                    <FontAwesomeIcon icon={faSearch} />{' '}Buscar
                </Button>
            </div>
        </>
    )
}
