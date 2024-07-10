import React, { createContext, useState, useContext } from 'react';

const HighContrastContext = createContext();

export const useHighContrast = () => useContext(HighContrastContext);

export const HighContrastProvider = ({ children }) => {
    const [isHighContrast, setIsHighContrast] = useState(false);

    const toggleHighContrast = () => {
        setIsHighContrast(prevState => !prevState);
    };

    return (
        <HighContrastContext.Provider value={{ isHighContrast, toggleHighContrast }}>
            {children}
        </HighContrastContext.Provider>
    );
};