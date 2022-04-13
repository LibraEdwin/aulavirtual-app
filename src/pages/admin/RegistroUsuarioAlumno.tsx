import { Container } from 'react-bootstrap'
import { TableUsuariosAlumnos } from '../../components/admin/interfaces/TablaUsuarioAlumno';
import { Home } from '../../components/Home';

export const RegistroUsuarioAlumno = () => {
  return (
    <Container>
      <Home />
      <TableUsuariosAlumnos />
    </Container>
  )
}
