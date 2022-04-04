import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const CerrarSecion = () => {

  const navigate = useNavigate()

  const Cerrar = () => {
    navigate('/login')
    cookies.remove('id', { path: '/' })
    cookies.remove('nombres', { path: '/' })
    cookies.remove('correo', { path: '/' })
    cookies.remove('rol', { path: '/' })
  }

  return (
    <ListGroup.Item action onClick={() => { Cerrar() }}>
      Cerrar Sesion
    </ListGroup.Item>
  )
}
