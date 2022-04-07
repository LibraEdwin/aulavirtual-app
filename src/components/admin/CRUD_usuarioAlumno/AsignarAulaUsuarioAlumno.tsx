import Swal from 'sweetalert2'
import axios from 'axios';
import { ApiAsignarUsuarioAlumnos, ApiGetAula } from '../../../apis/AdminApis';
import { aviso } from './Aviso';

export const AsignarAulaUsuarioAlumno = (usuario: any) => {

    const AvisoAsignar = async () => {
        const { data } = await axios.get(ApiGetAula)
        await Swal.fire({
            title: 'Aulas',
            input: 'select',
            inputOptions: data.map((elemnt: any) => `${elemnt.grado} ${elemnt.seccion}`),
            showCancelButton: false,
            confirmButtonText: 'Si',
            inputValidator: (value: any) => {
                return new Promise(async (resolve) => {
                    await axios.put(ApiAsignarUsuarioAlumnos + usuario.idalumnos, { aulas_idaulas: data[value].idaulas })
                    aviso()
                })
            }
        })
    }
    return (AvisoAsignar())
}
