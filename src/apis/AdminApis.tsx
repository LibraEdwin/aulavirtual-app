import Cookies from 'universal-cookie'
const cookies = new Cookies()

const id = cookies.get('id')

export const ApialumnoAula = `http://localhost:8000/admin/alumnos`

export const ApiAula = 'http://localhost:8000/admin/Aula'
