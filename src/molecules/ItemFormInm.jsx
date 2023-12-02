import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Like } from '../Context/Like';
import { Filtro } from '../Context/Filtro';
import Select from 'react-select';

const optionsPrecioDesde = [
    { name: "precioDesde", value: "100000000", label: "$100 millones" },
    { name: "precioDesde", value: "120000000", label: "$120 millones" },
    { name: "precioDesde", value: "170000000", label: "$170 millones" },
    { name: "precioDesde", value: "220000000", label: "$220 millones" },
    { name: "precioDesde", value: "270000000", label: "$270 millones" },
    { name: "precioDesde", value: "320000000", label: "$320 millones" },
    { name: "precioDesde", value: "370000000", label: "$370 millones" },
    { name: "precioDesde", value: "420000000", label: "$420 millones" },
    { name: "precioDesde", value: "470000000", label: "$470 millones" },
    { name: "precioDesde", value: "520000000", label: "$520 millones", },
];
const optionsPrecioHasta = [
    { name: "precioHasta", value: "120000000", label: "$120 millones" },
    { name: "precioHasta", value: "170000000", label: "$170 millones" },
    { name: "precioHasta", value: "220000000", label: "$220 millones" },
    { name: "precioHasta", value: "270000000", label: "$270 millones" },
    { name: "precioHasta", value: "320000000", label: "$320 millones" },
    { name: "precioHasta", value: "370000000", label: "$370 millones" },
    { name: "precioHasta", value: "420000000", label: "$420 millones" },
    { name: "precioHasta", value: "470000000", label: "$470 millones" },
    { name: "precioHasta", value: "520000000", label: "$520 millones" },
    { name: "precioHasta", value: "1000000000", label: "$570 millones", },
];

const optionsRooms = [
    { name: "rooms", value: "1", label: "1" },
    { name: "rooms", value: "2", label: "2" },
    { name: "rooms", value: "3", label: "3" },
    { name: "rooms", value: "4", label: "4" },
    { name: "rooms", value: "5", label: "5" },
];
const optionsBaths = [
    { name: "baths", value: "1", label: "1" },
    { name: "baths", value: "2", label: "2" },
    { name: "baths", value: "3", label: "3" },
    { name: "baths", value: "4", label: "4" },
    { name: "baths", value: "5", label: "5" },
];
const optionsArea = [
    { name: "area", value: "40", label: "20m² - 40m²" },
    { name: "area", value: "60", label: "40m² - 60m²" },
    { name: "area", value: "80", label: "60m² - 80m²" },
    { name: "area", value: "100", label: "80m² - 100m²" },
    { name: "area", value: "120", label: "100m² - 120m²" },
    { name: "area", value: "140", label: "120m² - 140m²" },
    { name: "area", value: "160", label: "140m² - 160m²" },
    { name: "area", value: "180", label: "160m² - 180m²" },
    { name: "area", value: "200", label: "Más de 200m²" },
];
const optionsEstado = [
    { name: "state", value: "nuevo", label: "Nuevo" },
    { name: "state", value: "usado", label: "Usado" },
];

export const ItemFormInm = () => {
    const { inputs, handleInputs } = useContext(Filtro);
    const { ciudades } = useContext(Like);
    const [validate, setValidate] = useState(false);
    const navigate = useRouter();

    const optionsCiudad = ciudades?.map((city) => ({
        name: 'city',
        value: city?.slug,
        label: city?.nombre_ciudad,
    }));

    /**
     * Esta función Ordena las ciudades por orden alfabetico de la A-Z
     * @param {String} ciudad El nombre de Ciudad
     * @param {String} ciudadSiguiente  El Nombre de la siguiente ciudad según orden
     * @returns {Array} retorna array con las ciudades ordenadas
     */

    function OrdenarCiudad(ciudad, ciudadSiguiente) {
        return ciudad.label.localeCompare(ciudadSiguiente.label);
    }
    optionsCiudad?.sort(OrdenarCiudad);

    const setData = (e) => {
        if (inputs.city != "0" && inputs.rooms != "0" && inputs.state != "0") {
            e.preventDefault();
            navigate(`/vitrina-colombia/${inputs.city}/habitaciones=${inputs.rooms}/${inputs.state}/area=${inputs.area}/banos=${inputs.baths}/desde=${inputs.precioDesde}/hasta=${inputs.precioHasta}`)

        } else {
            e.preventDefault();
            setValidate(true)
        }

    }


    return (
        <article className='itemFormInm'>
            <form onSubmit={setData} >
                <fieldset className='itemFormInm__content'>

                    <legend>Aplicar filtro</legend>

                    <Select
                        name="city"
                        onChange={handleInputs}
                        options={optionsCiudad}
                        isSearchable
                        value={optionsCiudad?.filter((option) => {
                            return option.value === inputs.city;
                        })}
                        placeholder="Ciudad"
                        className={` ${validate ? "active-message" : ""}`}
                    ></Select>

                    <Select
                        name="rooms"
                        onChange={handleInputs}
                        options={optionsRooms}
                        isSearchable
                        value={optionsRooms.filter((option) => {
                            return option.value === inputs.rooms;
                        })}
                        placeholder="N° Habitaciones"
                        className={`  ${validate ? "active-message" : ""}`}>
                    </Select>

                    <Select
                        name="state"
                        onChange={handleInputs}
                        options={optionsEstado}
                        isSearchable
                        value={optionsEstado.filter((option) => {
                            return option.value === inputs.state;
                        })}
                        placeholder="Estado"
                        className={`  ${validate ? "active-message" : ""}`}>
                    </Select>

                    <Select
                        name="baths"
                        onChange={handleInputs}
                        options={optionsBaths}
                        isSearchable
                        value={optionsBaths.filter((option) => {
                            return option.value === inputs.baths;
                        })}
                        placeholder="N° Baños">

                    </Select>
                    <Select
                        name="area"
                        onChange={handleInputs}
                        options={optionsArea}
                        isSearchable
                        value={optionsArea.filter((option) => {
                            return option.value === inputs.area;
                        })}
                        placeholder="Área">

                    </Select>
                    <Select
                        name="precioDesde"
                        onChange={handleInputs}
                        options={optionsPrecioDesde}
                        isSearchable
                        value={optionsPrecioDesde.filter((option) => {
                            return option.value === inputs.precioDesde;
                        })}
                        placeholder="Desde">

                    </Select>
                    <Select
                        name="precioHasta"
                        onChange={handleInputs}
                        options={optionsPrecioHasta}
                        isSearchable
                        value={optionsPrecioHasta.filter((option) => {
                            return option.value === inputs.precioHasta;
                        })}
                        placeholder="Hasta">

                    </Select>


                    <div className='itemFormInm__boton'>
                        <button type='submit' className='btn'>
                            Buscar
                        </button>
                    </div>

                </fieldset>
            </form>
        </article>
    )
}
