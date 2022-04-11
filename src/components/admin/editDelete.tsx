import Swal from 'sweetalert2'
import axios from 'axios';
import { aviso } from '../Aviso';

const Editar = async (api: string) => {
    await axios.put(api)
}

const Eliminar = async (api: string) => {
    await axios.delete(api)
}

export const editDelete = (getUser: any, api: string, title: string, text: string, icon: any, operacion: string) => {
    Swal.fire({
        title,
        text,
        icon,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si'
    }).then(async (result) => {
        if (result.isConfirmed) {
            switch (operacion) {
                case 'Editar':
                    Editar(api)
                    break;
                case 'Eliminar':
                    Eliminar(api)
                    break;
                default:
                    break;
            }
            aviso()
        }
    })
}