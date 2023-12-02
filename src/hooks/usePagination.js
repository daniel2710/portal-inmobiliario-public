import { useState } from "react";

// Recibe 2 props: los items por pagina y el array de datos, devuelve las funciones de siguiente (handleNextPage), anterior (handlePrevPage) y los datos como pagina actual (current_page) y total de paginas (totalPages)
export const usePagination = (itemsPerPage, array) =>{
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = array?.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = array?.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };


    return { currentItems, array, currentPage, handleNextPage, handlePrevPage, totalPages }
}