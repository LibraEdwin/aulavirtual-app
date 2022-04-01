import Cookies from 'universal-cookie'
const cookies = new Cookies()

const id = cookies.get('id')

export const ApiCalendatio = `https://aulavirtual-apis.herokuapp.com/alumno/${id}`
