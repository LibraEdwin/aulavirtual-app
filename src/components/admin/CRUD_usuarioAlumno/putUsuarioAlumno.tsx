import Swal from 'sweetalert2'
import axios from 'axios';
import { aviso } from '../../Aviso';
import { ApiputUsuarioAlumnosDesactivar, ApideleteUsuariosAlumnoDesactivados } from '../../../apis/AdminApis';

export const UsuarioAlumnoDesactivar = (usuario: any, getUser: any) => {

    const AvisoEliminar = () => {
        Swal.fire({
            title: 'Desactivar',
            text: `Estas seguro de desactivar al alumno ${usuario.apellidos} ${usuario.nombres}!`,
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.put(ApiputUsuarioAlumnosDesactivar + usuario.idusuarios)
                aviso()
                getUser()
            }
        })
    }
    return (
        AvisoEliminar()
    )
}

export const UsuarioAlumnoActivar = (usuario: any, getUser: any) => {

    const AvisoEliminar = () => {
        Swal.fire({
            title: 'Eliminar',
            text: `Estas seguro de eliminar al alumno ${usuario.apellidos} ${usuario.nombres}!`,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(ApideleteUsuariosAlumnoDesactivados + usuario.idalumnos)
                aviso()
                getUser()
            }
        })
    }
    return (
        AvisoEliminar()
    )
}
