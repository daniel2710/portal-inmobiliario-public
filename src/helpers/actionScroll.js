'use client'
/**
* Función para realizar un desplazamiento en la ventana si se cumplen ciertas condiciones.
*
* @function
* @name actionScroll
* @returns {void}
*
* @description Esta función verifica si la clase 'fijo' no está presente en el elemento con la clase 'barSearch'
*  y si el ancho de la pantalla es mayor a 930 píxeles. En caso afirmativo, realiza un desplazamiento de la ventana a la posición (0, 100).
*/
export const actionScroll = () => {
    const element = document.querySelector('.barSearch');
    const classSearch = 'fijo'
    if (!element.classList.contains(classSearch) && screen.width > 930) {
        window.scrollTo({ top: 100, behavior: 'smooth' });
    }
}
/**
 * Desplaza suavemente la ventana hacia una sección específica en la página.
 *
 * @param {string} id - El ID del elemento HTML que representa la sección a la que se desea desplazar.
 * @param {boolean} conditional - Una condición que determina si se debe realizar o no el desplazamiento.
 * @param {number} [offset=0] - Un desplazamiento opcional para ajustar la posición de desplazamiento (el valor predeterminado es 0).
 *
 * @returns {void}
 *
 * @description Esta función encuentra el elemento HTML con el ID proporcionado,
 * calcula la posición de desplazamiento relativa a la ventana gráfica y realiza
 * el desplazamiento suave a esa posición si se cumple la condición especificada.
 */

export const scrollSection = (id, conditional, offset = 0) => {
    const element = document.getElementById(id);
    const scrollTop = element.getBoundingClientRect().top + window.scrollY + offset;
    if (conditional || !conditional) {
        window.scrollTo({
            top: scrollTop,
            behavior: 'smooth',
        });
    }
}
