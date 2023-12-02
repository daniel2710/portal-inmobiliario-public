'use client'
import Image from "next/image"
import arrowLeft from '../../public/img/colraicesInmobiliario/icons/arrow_left.svg'
import arrowRight from '../../public/img/colraicesInmobiliario/icons/arrow_right_.svg'

const Pagination = ({ handleNextPage, handlePrevPage, currentPage, totalPages }) => {
  return (
    <div className="container-pagination-basic">
        {currentPage > 1 && <Image onClick={handlePrevPage} src={arrowLeft} alt="arrow-left" width={50} height={50} />}

        <div className="text-pagination">
            <span className="first-text">{currentPage} /</span>
            <span className="second-text">{totalPages}</span>
        </div>

       {currentPage < totalPages && <Image onClick={handleNextPage} src={arrowRight} alt="arrow-left" width={50} height={50} />}
    </div>
  )
}

export default Pagination