'use client'
import { createContext } from 'react'
import { useFiltro } from '../hooks/useFiltro';
const Filtro = createContext();

const FiltroContextProvider = ({ children }) => {
    const [inputs, handleInputs, setInputs, inmuebles, handleInmuebles, label, setLabel] = useFiltro();
    return (
        <Filtro.Provider value={{
            inputs, handleInputs, setInputs, inmuebles, handleInmuebles, label, setLabel
        }}>
            {children}
        </Filtro.Provider>
    )
}
export { Filtro, FiltroContextProvider };