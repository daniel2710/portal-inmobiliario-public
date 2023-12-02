'use client'
import { createContext } from 'react'
import { handelLike, handelDelete } from '../Context/setLike';

const ContextLike = createContext();

const ContextLikeProvider = ({ children }) => {
    return (
        <ContextLike.Provider value={{ handelLike, handelDelete }}>
            {children}
        </ContextLike.Provider>
    )
}
export { ContextLike, ContextLikeProvider }

