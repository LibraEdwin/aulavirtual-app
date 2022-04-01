import { useEffect, useState } from 'react'
import axios from 'axios';

export const useDatos = (url: any) => {

    const [state, setState] = useState([])

    useEffect(() => {

        axios.get(url)
            .then((res) => { setState(res.data) })

    }, [state])

    return {
        state
    }
}
