import React, { createContext, useState, useContext, useEffect } from "react";

const TaxContext = createContext();

export function TaxProvider({ children }) {
    const savedTax = localStorage.getItem("tax");
    const initialTax = savedTax ? Number(savedTax) : 6.5; 
    const [tax, setTax] = useState(initialTax); 

  useEffect(() => {
    localStorage.setItem("tax", tax);
  }, [tax]);

  return (
    <TaxContext.Provider value={{ tax, setTax }}>
      {children}
    </TaxContext.Provider>
  );
}

export function useTax() {
  return useContext(TaxContext);
}