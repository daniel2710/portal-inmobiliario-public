'use client'
import React, { useState, useEffect } from "react";
import { plazosCredito, plazosInicial, formatoPeso } from "../data/plazos";

const plazosI = plazosInicial;
const plazosC = plazosCredito;
const peso = formatoPeso;

export const Simulador = (precioInmueble) => {
    const precio = precioInmueble.precioInmueble;

    const [number, setNumber] = useState({
        valorInmueble: precio,
        cuotaInicial: 0,
        plazoCredito: "",
    });

    const [plazoInicial, setPlazoInicial] = useState("12");
    const [porcentaje, setPorcentaje] = useState();
    const [porcentual, setPorcentual] = useState(0.3);
    const [cuotaMensualInicial, setCuotaMensualInicial] = useState();
    const [option, setOption] = useState(false);

    useEffect(() => {
        const { valorInmueble, cuotaInicial } = number;
        setPorcentaje(valorInmueble * porcentual);
        setCuotaMensualInicial(
            Math.ceil(Number(cuotaInicial) / Number(plazoInicial))
        );
    }, [number, plazoInicial, porcentual]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNumber({ ...number, [name]: value });
    };
    const inicial = number.valorInmueble * porcentual;


    return (
        <div className="simulador-container">
            <article>
                <h1>Calcula tu cuota <span>en tiempo real</span></h1>
                <section className="simulador-title">
                    <div className="container__radio"><input type='radio' name='credito' value='hipotecario' onClick={() => { setOption(false), setPorcentual(0.3) }} /> <label>Crédito hipotecario</label></div>
                    <div className="container__radio"><input type='radio' name="credito" value='habitacional' onClick={() => { setOption(true), setPorcentual(0.2) }} /> <label>Leasing Habitacional</label></div>

                </section>
                <section className="input-group">
                    <div>
                        <label> Valor del inmueble</label>
                        <input
                            type="number"
                            name="valorInmueble"
                            placeholder={peso.format(number.valorInmueble)}
                            readOnly
                        />
                    </div>
                </section>

                <section className="input-group">
                    <div>
                        <label> Valor Cuota Inicial</label>
                        <div className="range">
                            <input
                                type="range"
                                step={1000000}
                                min={porcentaje}
                                max={number.valorInmueble}
                                onChange={handleChange}
                                name="cuotaInicial"
                                value={number.cuotaInicial}
                                placeholder=""
                            />
                            {number.cuotaInicial == "" ? (
                                <p>{peso.format(inicial)}</p>
                            ) : (
                                <p>{peso.format(number.cuotaInicial)}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label> Plazo del crédito</label>
                        <select
                            value={plazoInicial}
                            onChange={(e) => {
                                const selectedPlazoInicial = e.target.value;
                                setPlazoInicial(selectedPlazoInicial);
                            }}
                        >
                            {plazosC.map((plazo) => (
                                <option key={plazo.id} value={plazo.id}>
                                    {plazo.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>

                <section className="input-group">
                    <section className="resultado">
                        <p> Valor Cuota</p>{" "}
                        <span>{peso.format(
                            cuotaMensualInicial ||
                            porcentaje / Number(plazoInicial)
                        )}</span>
                    </section>
                </section>

                <a href="https://api.whatsapp.com/send/?phone=15136479405" className="enlace" target='_blank'><button className="button__solicitud" >¡Solicita tu crédito!</button></a>
            </article>

        </div>
    );
};