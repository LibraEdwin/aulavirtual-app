import Cookies from 'universal-cookie'
const cookies = new Cookies()

const id = cookies.get('id')

export const ApiGetCalendatio = `http://localhost:8000/alumno/${id}`
