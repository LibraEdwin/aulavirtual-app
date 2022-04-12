import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { registroUsuarioAlumno } from '../../../apis/AdminApis';
import { useDatos } from '../../../hooks/useDatos';

export const FormBotonExtraUsuarioAlumno = ({ operacion, text, eventoAula }: any) => {

    const { state } = useDatos(registroUsuarioAlumno.getAulas)

    const [aula, setAula] = useState()

    const handleImputChange = (e: string | any) => {
        setAula(e.target.value);
    }

    useEffect(() => {
        eventoAula(aula)
    }, [aula])

    return (
        <>
            {(operacion === "Eliminar" && (
                <Form>
                    <Form.Group >
                        <Form.Label>Seguro de {operacion} a {text}</Form.Label>
                    </Form.Group>
                </Form>
            )) || (operacion === "Desabilitar" && (
                <Form>
                    <Form.Group >
                        <Form.Label>Seguro de {operacion} a {text}</Form.Label>
                    </Form.Group>
                </Form>
            )) || (operacion === "Habilitar" && (
                <Form>
                    <Form.Group >
                        <Form.Label>Seguro de {operacion} a {text}</Form.Label>
                    </Form.Group>
                </Form>
            )) || (operacion === "Asignar" && (
                <Form>
                    <Form.Group
                        className="mb-3"
                        onChange={handleImputChange}>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            {state.map((element: any) => (
                                <option
                                    key={element.idaulas}
                                    value={element.idaulas}>
                                    {element.grado + ' ' + element.seccion}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Form>
            ))}
        </>
    )
}
