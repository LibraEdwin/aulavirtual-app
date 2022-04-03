import React from 'react'
import { useDatos } from '../../hooks/useDatos'
import { Table } from 'react-bootstrap';
import { ApialumnoAula } from '../../apis/AdminApis';

export const TableAlumnos = () => {

    const { state } = useDatos(ApialumnoAula)

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>nombre</th>
                </tr>
            </thead>
            {state.map((element: any) =>
                <tbody>
                    <tr>
                        <td>{element.nombres}</td>
                    </tr>
                </tbody>
            )}
        </Table>
    )
}
