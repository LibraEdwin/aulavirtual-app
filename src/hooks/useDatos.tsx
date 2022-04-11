import { useEffect, useState } from 'react'
import axios from 'axios';

export const useDatos = (url: any) => {

    const [state, setState] = useState([])

    const getUser = async () => {
        const { data } = await axios.get(url);
        setState(data)
    }

    useEffect(() => {
        getUser()
    }, [state])

    return {
        state
    }
}
