'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Animation = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            anchorPlacement: 'top'
        });
    }, [])
    return (
        <>
            {children}
        </>
    )
}
