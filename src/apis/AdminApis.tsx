import Cookies from 'universal-cookie'
const cookies = new Cookies()

const id = cookies.get('id')

export const ApiUsuario = `http://localhost:8000/admin/usuarios`

export const ApiAula = 'http://localhost:8000/admin/Aula'
