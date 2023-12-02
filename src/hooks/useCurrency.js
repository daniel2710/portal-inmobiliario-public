'use client'
export const useCurrency = () => {

    const formatePrice = (price) => {
        const newPrice = new window.Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
        }).format(price);
        return newPrice;
    }

    return [formatePrice];
}