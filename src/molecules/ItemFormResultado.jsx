'use client'
import { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { useForm, Controller } from "react-hook-form"
import { PhoneInput } from 'react-international-phone';
import toast, { Toaster } from "react-hot-toast";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import 'react-international-phone/style.css';
import { TitleSection } from "../components/TitleSection";
import { scrollSection } from "../helpers/actionScroll";
import { onlyNumbers, peso, reverseFormat } from "../helpers/formatCurrency";
import { optionsProperty, optionsState, optionsTime } from '../helpers/options';


export const ItemFormResultado = () => {
    const { register, formState: { errors }, handleSubmit, control, reset, resetField } = useForm();
    const [fields, setFields] = useState(false);
    const [loading, setLoading] = useState(false);
    const theme = createTheme({
        palette: {
            primary: {
                main: '#354676'
            },
            secondary: {
                main: '#CAA55E',
            },
        },
    });
    /**
     * Almacena los datos del formulario en una hoja de cálculo de Google mediante una solicitud POST.
     *
     * @param {object} data - Datos del formulario.
     *
     * @returns {void}
     *
     * @description Utiliza la API Fetch para enviar datos del formulario a una URL de script de Google.
     * Muestra un mensaje de éxito y restablece el formulario si la solicitud es exitosa.
     */
    const storageDataSheet = (data) => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbxwUM9vNEijLnvEnAJYohvbLum8DD7nvVPE3ExxMGpA9G9yOfRWHsMKYD_Itnp-Ix6x/exec";
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("phone", data.phone);
        formData.append("email", data.email);
        formData.append("city", data.city);
        formData.append("typeProperty", data.typeProperty);
        formData.append("state", data.state);
        formData.append("rooms", data.rooms);
        formData.append("budget", data.budget);
        formData.append("timeAcquire", data.timeAcquire);


        fetch(scriptURL, {
            method: "POST",
            body: formData
        }).then((response) => {
            try {
                if (response.status === 200) {
                    setLoading(false);
                    toast("!Hemos recibido tu solicitud! ");
                    reset({ phone: '' });
                    reset();
                }
            } catch (error) {
                console.log(error);
            }
        });
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        scrollSection("form-container", true, -200)
        setFields(!fields);
        setLoading(true);
        storageDataSheet(data);
    }
    /**
 * Realiza varias operaciones relacionadas con campos adicionales en un formulario.
 *
 * @returns {void}
 *
 * @description Esta función alterna el estado de los campos adicionales, realiza un
 * reinicio de ciertos campos si los campos adicionales se activan, y realiza
 * desplazamientos suaves en la página dependiendo del estado de los campos.
 */
    const functionsMoreFields = () => {
        setFields(!fields);
        if (fields) {
            resetField('typeProperty');
            resetField('state');
            resetField('rooms');
            resetField('budget');
            resetField('timeAcquire');
            scrollSection("form-container", true, -200)
        }
        if (!fields) {
            scrollSection("form", false, 400);
        }

    }
    return (

        <section className='form-container' id='form-container'>
            <Toaster
                position="bottom-left"
                toastOptions={{
                    success: {
                        duration: 5000,
                    },
                    style: {
                        background: "linear-gradient(180deg, #142656 0%, rgb(48 75 145) 40%)",
                        color: '#fff',
                    },
                    icon: "🏠👏"
                }}
            />
            {loading ? <ThemeProvider theme={theme}>
                <Box sx={{ width: '50%', height: "clamp(28.5rem, 28.5rem, 95.7rem)", margin: '0 auto' }}>
                    <LinearProgress color='primary' />
                    <Typography variant='h4' color="primary">
                        Enviando...
                    </Typography>
                </Box>
            </ThemeProvider> :
                <form onSubmit={handleSubmit(onSubmit)} id='form'>
                    <div className='container-fields'>
                        <TitleSection
                            title={screen.width < 930 ? "Me interesa este proyecto" : "Te ayudamos a encontrar"}
                            span={screen.width < 930 ? "Quiero más información" : "el hogar ideal"} />
                        <fieldset>
                            <input type="text" placeholder="Nombre Completo" {...register("name", { required: true })} />
                            {errors?.name && <p className='message-error'> Este campo es requerido</p>}
                        </fieldset>

                        <Controller
                            control={control}
                            name={'phone'}
                            defaultValue=""
                            rules={{
                                required: true,
                                minLength: 8,
                                maxLength: 15,
                            }}
                            render={({ field }) => {
                                return (
                                    <fieldset className="container-phone">
                                        <PhoneInput
                                            {...field}
                                            onChange={(v) => field.onChange(v)}
                                            placeholder="Teléfono"
                                        />
                                        <Tippy
                                            animation="scale"
                                            theme={'dark'}
                                            content="Teléfono del país de residencia"
                                        >
                                            <p className="tippy" id="tippy_title">
                                                <BsQuestionCircle />
                                            </p>
                                        </Tippy>
                                        {errors?.phone && <p className='message-error'> Este campo es requerido</p>}
                                    </fieldset>
                                );
                            }}
                        />

                        <fieldset>
                            <input type="email" placeholder="Correo electrónico" {...register("email", { required: true })} />
                            {errors?.email && <p className='message-error'> Este campo es requerido</p>}
                            <fieldset>
                            </fieldset>
                            <input type="text" placeholder="Ciudad de interés" {...register("city", { required: true })} />
                            {errors?.city && <p className='message-error'> Este campo es requerido</p>}
                        </fieldset>
                        <div className='buttons'>
                            <button type="button" className='btn-fields'
                                onClick={() => functionsMoreFields()}>Ajustar a mi gusto</button>
                            {!fields && <button className={'btn-send'} type="submit">Enviar</button>}
                        </div>
                    </div>

                    {fields &&
                        <div className='more-fields' data-aos="fade-down" data-aos-duration="500">
                            <img onClick={() => functionsMoreFields()}
                                src="/img/colraicesInmobiliario/icons/close_circle.svg" alt="Icon" />
                            <fieldset className='options'>
                                <legend>¿Qué tipo de propiedad estás buscando?</legend>
                                <div className='container-options'>
                                    {optionsProperty?.map((item, id) => (
                                        <label htmlFor="typeProperty" key={id}>
                                            <input name="typeProperty" type="checkbox" value={item} {...register('typeProperty')} />
                                            {item}
                                        </label>
                                    ))}
                                </div>

                            </fieldset>

                            <fieldset className='options'>
                                <legend>¿Deseas un inmueble nuevo o usado?</legend>
                                <div className='container-options state'>
                                    {optionsState?.map((item, id) => (
                                        <label htmlFor="state" key={id}>
                                            <input name="state" type="checkbox" value={item} {...register('state')} />
                                            {item}
                                        </label>
                                    ))}
                                </div>

                            </fieldset>
                            <fieldset>
                                <label className='single-field' htmlFor="rooms">
                                    ¿Cuántas habitaciones te gustaría que tenga la propiedad?
                                    <input name="rooms" type="text" placeholder="Número de habitaciones" onKeyDown={onlyNumbers}{...register("rooms")} />
                                </label>
                            </fieldset>
                            <fieldset>
                                <Controller
                                    name={'budget'}
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: false }}
                                    render={({ field }) => (
                                        <label className='single-field' htmlFor="budget">
                                            ¿Cuánto es tu presupuesto máximo en pesos colombianos?
                                            <input
                                                type="text"
                                                {...field}
                                                onChange={(e) => {
                                                    const numericValue =
                                                        e.target.value.length === 1
                                                            ? parseInt(e.target.value)
                                                            : parseInt(reverseFormat(e.target.value))
                                                    field.onChange(numericValue)
                                                }}
                                                value={isNaN(field.value) ? peso.format(0) : peso.format(field.value)}
                                            />
                                        </label>
                                    )}
                                />
                            </fieldset>

                            <fieldset className='options'>
                                <legend>¿Aproximadamente en cuánto tiempo tienes planeado adquirir el inmueble?</legend>
                                <div className='container-options time-acquire'>
                                    {optionsTime?.map((item) => (
                                        <label htmlFor="timeAcquire" key={item.id}>
                                            <input name="timeAcquire" type="checkbox" value={item.value} {...register('timeAcquire')} />
                                            {item.label}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                            {fields && <button className={'btn-send'} type="submit">Enviar</button>}
                        </div>
                    }

                </form>}

        </section>
    )
}
