import Swal from 'sweetalert2'
import axios from 'axios';
import { ApiDeleteUsuarioAlumnos } from '../../../apis/AdminApis';
import { aviso } from '../../Aviso';

export const EliminarUsuarioAlumno = (usuario: any) => {

    const AvisoEliminar = () => {
        Swal.fire({
            title: 'Desactivar',
            text: `Estas seguro de desactivar al alumno ${usuario.apellidos} ${usuario.nombres}!`,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si'
        }).then(async(result) => {
            if (result.isConfirmed) {
                await axios.delete(ApiDeleteUsuarioAlumnos + usuario.idusuarios)
                aviso()
            }
        })
    }
    return (
        AvisoEliminar()
    )
}
