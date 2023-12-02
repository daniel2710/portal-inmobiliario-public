'use client'
import React, { useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Filtro } from '../Context/Filtro';
const Filter = dynamic(() => import('./BarSearch/Filter'), { ssr: false });
import { APIURL } from '../config';

export const BarSearch = () => {
    const router = useRouter();
    const { inputs, handleInputs, setInputs, label: labelFilter, setLabel } = useContext(Filtro);
    const [filterCl, setFilterCl] = useState(false);
    const [validate, setValidate] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);
    const [ciudades, setCiudades] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const ciudadData = async () => {
            const resp = await fetch(`${APIURL}cities`);
            const data = await resp.json();
            setCiudades(data.data);
        }
        const departamentoData = async () => {
            const resp = await fetch(`${APIURL}regions`);
            const data = await resp.json();
            setDepartments(data.data);
        }
        departamentoData();
        ciudadData();
    }, []);
    /**
     * Generates search options by concatenating cities and departments.
     *
     * @param {Array} ciudades - Array of objects representing cities.
     * @param {Array} departments - Array of objects representing departments.
     * @returns {Array} Array of search options with labels and slugs.
     */
    const optionsSearch = [...ciudades, ...departments]?.map(obj => {
        return {
            label: obj.nombre_ciudad || obj.nombre_region,
            slug: obj.slug,
        };
    });

    const isFound = (optionsSearch?.some((item) => item.label === labelFilter));
    const setData = (e) => {
        e.preventDefault();
        if (inputs.city != "0" && labelFilter.length > 0 && isFound) {
            const routeSegments = [inputs.city, inputs.typeProperty, inputs.state];
            const routeQuery = [
                `habitaciones=${inputs.rooms}`,
                `area-desde=${inputs.areaDesde}`,
                `area-hasta=${inputs.areaHasta}`,
                `banos=${inputs.baths}`,
                `desde=${inputs.precioDesde}`,
                `hasta=${inputs.precioHasta}`,]
            const filterSegments = routeSegments.filter((segment) => segment !== '0');
            const filterQuery = routeQuery.filter((query) => query.split('=')[1] !== '0');
            router.push(`/filtrados/${filterSegments.join('/')}?${filterQuery.join('&')}`)
        } else {
            e.preventDefault();
            setValidate(true);
            if (!isFound && labelFilter.length > 0) {
                setIsNotFound(true);
            }
        }

    }

    return (
        <div className={`barSearch`}>
            <form onSubmit={setData}>
                <Filter
                    inputs={inputs}
                    handleInputs={handleInputs}
                    setInputs={setInputs}
                    ciudades={ciudades}
                    departments={departments}
                    filterCl={filterCl}
                    setFilterCl={setFilterCl}
                    validateField={validate}
                    validateSearch={isNotFound}
                    setIsNotFound={setIsNotFound}
                    optionsSearch={optionsSearch}
                    setValidateField={setValidate}
                    label={labelFilter}
                    setLabel={setLabel}
                />
            </form>
        </div>
    )
}
