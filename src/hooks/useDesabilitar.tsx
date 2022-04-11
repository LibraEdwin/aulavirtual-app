import Swal from 'sweetalert2'
import axios from 'axios';
import { registroUsuarioAlumno } from '../apis/AdminApis';
import { aviso } from '../components/Aviso';

export const useDesabilitar = (usuario: any, getUser: any) => {

  const AvisoEliminar = () => {
    Swal.fire({
      title: 'DESABILITAR',
      text: `Estas seguro de desabilitar al alumno: ${usuario.apellidos} ${usuario.nombres}!`,
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(registroUsuarioAlumno.putDesactivar + usuario.idusuarios)
        aviso()
        getUser()
      }
    })
  }
  return (
    AvisoEliminar()
  )
}