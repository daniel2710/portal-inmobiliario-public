'use client'
import { useState } from "react";

const useFiltro = () => {

    const [inputs, setInputs] = useState({
        precioDesde: '0',
        precioHasta: '0',
        city: '0',
        typeProperty: '0',
        rooms: '0',
        baths: '0',
        areaDesde: '0',
        areaHasta: '0',
        state: '0',
    });

    const [inmuebles, setInmuebles] = useState([]);
    const [label, setLabel] = useState('');
    /**
     * Función para capturar atributos name y value de los campos del filtro
     * @param {Object} e nombre del objeto que contiene los eventos de los campos
     */


    const handleInputs = (selected) => {
        const { name, value } = selected;
        setInputs((prevState) => ({ ...prevState, [name]: value }))
    }

    /**
     * Función para actualizar el estado de los datos enviados desde la base de datos
     * @param {Array} data Nombre del array de objeto a enviar
     */
    const handleImuebles = (data) => {
        setInmuebles(data);
    }

    return [inputs, handleInputs, setInputs, inmuebles, handleImuebles, label, setLabel]

}

export { useFiltro };
