'use client'

export const Select = ({
    label,
    isDropdown,
    toggleDropdown }) => {
    return (
        <div className='select__dropdown'>
            <button type='button'  onClick={() => {
                toggleDropdown(!isDropdown);
            }
            }>{label}<img className={`${isDropdown && 'icon'}`} src='/img/colraicesInmobiliario/icons/arrow_down.svg' alt='Icon' /></button>
        </div>
    )
}
