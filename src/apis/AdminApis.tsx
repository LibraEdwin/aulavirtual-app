const urlAdmin = 'http://localhost:8000/admin/'

export const registroUsuarioAlumno = {

    getAlumnosActivados: urlAdmin + 'usuariosAlumnoActivados',
    getAlumnosDesactivados: urlAdmin + 'usuariosAlumnoDesactivados',

    PostAlumnos: urlAdmin + 'usuariosAlumno',

    PutAlumnos: urlAdmin + 'usuariosAlumno/',

    putActivar: urlAdmin + 'usuariosAlumnoActivar/',
    putDesactivar: urlAdmin + 'usuariosAlumnoDesactivar/',

    deleteAlumnos: urlAdmin + 'usuariosAlumnoDesactivado/',

    putAsignar: urlAdmin + 'asignarAula/',
    getAulas: urlAdmin + 'Aula'

}