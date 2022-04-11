const url = 'http://localhost:8000/admin/'

export const registroUsuarioAlumno = {

    getAlumnosActivados: url + 'usuariosAlumnoActivados',
    getAlumnosDesactivados: url + 'usuariosAlumnoDesactivados',

    PostAlumnos: url + 'usuariosAlumno',

    PutAlumnos: url + 'usuariosAlumno/',

    putActivar: url + 'usuariosAlumnoActivar/',
    putDesactivar: url + 'usuariosAlumnoDesactivar/',

    deletAlumnos: url + 'usuariosAlumnoDesactivado/',

    putAsignar: url + 'asignarAula/',
    getAulas: url + 'Aula'

}