import React, { createContext, useContext, useState } from "react";

// Define o tipo das flags com valores dinâmicos
interface FlagContextType {
  flags: Record<string, any>; // Qualquer valor (boolean, string, número, objeto...)
  setFlag: (key: string, value: any) => void;
  clearFlag: (key: string) => void;
  clearAllFlags: () => void;
}

// Criando o contexto
const FlagContext = createContext<FlagContextType | undefined>(undefined);

// Criando o Provider
export const FlagProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [flags, setFlags] = useState<Record<string, any>>({});

  // Define uma flag com valor específico
  const setFlag = (key: string, value: any) => {
    setFlags((prev) => ({ ...prev, [key]: value }));
  };

  // Remove uma flag (define como null)
  const clearFlag = (key: string) => {
    setFlags((prev)=>{
      const newFlags ={...prev};
      delete newFlags[key];
      return newFlags;
    });
    // setFlags((prev) => ({ ...prev, [key]: null }));
  };
  const clearAllFlags = () => { 
    setFlags(() => ({}));
  };

  return (
    <FlagContext.Provider value={{ flags, setFlag, clearFlag,clearAllFlags }}>
      {children}
    </FlagContext.Provider>
  );
};

// Hook para acessar o contexto em qualquer componente
export const useFlags = () => {
  const context = useContext(FlagContext);
  if (!context) {
    throw new Error("useFlags deve ser usado dentro de um FlagProvider");
  }
  return context;
};
