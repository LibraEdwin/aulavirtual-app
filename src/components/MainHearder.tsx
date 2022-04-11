import { OffcanvasBodyAdmin } from './admin/interfaces/OffcanvasBodyAdmin';
import { OffcanvasBodyAlumno } from './alumno/OffcanvasBodyAlumno';
import { OffcanvasBodyDocente } from './docente/OffcanvasBodyDocente';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const MainHearder = () => {

    const rol = cookies.get('rol')

    return (
        <>
            {(rol === "ADMIN" && <OffcanvasBodyAdmin /> || (rol === "DOCENTE" && <OffcanvasBodyDocente />)) || (rol === "ALUMNO" && <OffcanvasBodyAlumno />)}
        </>
    )
}