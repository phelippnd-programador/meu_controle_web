import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ActiveProviderProps {
    children: ReactNode;
}

interface ActiveContextProps {
    isActive: boolean;
    setIsActive: (value: boolean) => void;
}

const ActiveContext = createContext<ActiveContextProps | undefined>(undefined);

export const ActiveProvider: React.FC<ActiveProviderProps> = ({ children }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <ActiveContext.Provider value={{ isActive, setIsActive }}>
            {children}
        </ActiveContext.Provider>
    );
};

export const useActive = (): ActiveContextProps => {
    const context = useContext(ActiveContext);
    if (!context) {
        throw new Error('useActive must be used within an ActiveProvider');
    }
    return context;
};