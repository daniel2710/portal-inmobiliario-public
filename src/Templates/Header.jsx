'use client'
import React, { useState } from 'react'
import { links } from '../helpers/options'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(links[0].label);
    const route = usePathname();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return (
        <header className={`wrapper ${route.pathname !== '/vitrina-colombia' && 'custom-position'}`}>
            <nav className="dropdown" data-open={isOpen}>
                <label htmlFor="dropdown__toggle" className="dropdown__active">
                    <span id="dropdown__selected">{selectedOption}</span>

                    <img src={!isOpen ? "/img/colraicesInmobiliario/icons/hamburguer.svg" : "/img/colraicesInmobiliario/icons/close_hamburguer.svg"} className='dropdown__icon' alt="Icon" />
                </label>
                <input className="dropdown__toggle"
                    type="checkbox" name="dropdown__toggle"
                    id="dropdown__toggle" aria-controls="dropdown__list"
                    checked={isOpen} onChange={handleToggle} />
                <ul className={`dropdown__list ${isOpen ? 'open' : ''}`}>
                    {links?.slice(1)?.map((option) => (
                        <Link href={option.url}
                            key={option.id} data-option={option?.label}
                            className={selectedOption === option.label ? 'active' : ''}
                            onClick={() => handleOptionClick(option.label)}
                        >
                            {option?.label}
                        </Link>

                    ))}
                    <a href="#contact">Contacto</a>
                </ul>
            </nav>
        </header>
    );
};

