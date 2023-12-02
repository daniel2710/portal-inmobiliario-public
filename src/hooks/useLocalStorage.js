'use client'
import { useState } from 'react'

/**
 * Función para almacenar en localstorage  los click en el icono favorito
 * 
 * @param {String} key Identificador del inmueble
 * @param {Boolean} initialValue Valor booleano inicial
 * @returns {State, function} Retorna un estado y una función
 */
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialValue
        } catch (e) {
            return initialValue
        }
    })
    const setLocalStorage = value => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (e) {
            console.error(e)
        }
    }
    return [storedValue, setLocalStorage]
}