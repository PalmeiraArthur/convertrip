import React, { createContext, useState, useContext, useEffect } from "react";


const DollarContext = createContext();


export function DollarProvider({ children }) {

  const savedDollar = localStorage.getItem("dollar");
  const initialDollar = savedDollar ? Number(savedDollar) : 6; 
  const [dollar, setDollar] = useState(initialDollar); 

 
  useEffect(() => {
    localStorage.setItem("dollar", dollar);
  }, [dollar]);

  return (
    <DollarContext.Provider value={{ dollar, setDollar }}>
      {children}
    </DollarContext.Provider>
  );
}


export function useDollar() {
  return useContext(DollarContext);
}
