'use client'
export const Input = ({ name, placeholder, icon, type, label, value, action, customClass, onlyNumbers }) => {
    return (
        <div className={customClass} >
            {icon && <img src={icon} alt="Icon" />}
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} value={value} placeholder={placeholder} onChange={action} onKeyDown={onlyNumbers} />
        </div>

    )
}
