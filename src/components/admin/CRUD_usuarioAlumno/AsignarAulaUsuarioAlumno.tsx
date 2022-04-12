import Swal from 'sweetalert2'
import axios from 'axios';
import { registroUsuarioAlumno } from '../../../apis/AdminApis';
import { aviso } from '../../Aviso';

export const AsignarAulaUsuarioAlumno = (usuario: any, mostrarUsuarios: any) => {

    const AvisoAsignar = async () => {
        const { data } = await axios.get(registroUsuarioAlumno.getAulas)
        await Swal.fire({
            title: 'Aulas',
            input: 'select',
            inputOptions: data.map((elemnt: any) => `${elemnt.grado} ${elemnt.seccion}`),
            showCancelButton: false,
            confirmButtonText: 'Si',
            inputValidator: (value: any) => {
                return new Promise(async (resolve) => {
                    await axios.put(registroUsuarioAlumno.putAsignar + usuario.idalumnos, { aulas_idaulas: data[value].idaulas })
                    mostrarUsuarios()
                    aviso()
                })
            }
        })
    }
    return (AvisoAsignar())
}
