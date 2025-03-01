
import React, { useState } from "react";
import { useDollar } from "./contextDollar";

function Converter() {
  const [numero, setNumero] = useState(""); 
  const [resultado, setResultado] = useState(null); 
  const { dollar } = useDollar(); 

  const inputNumero = (event) => {
    setNumero(event.target.value);
  };

  const calcularResultado = () => {
    if (numero === "" || isNaN(numero)) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    setResultado((Number(numero) * dollar).toLocaleString("pt-BR", 
      {minimumFractionDigits: 2, 
        maximumFractionDigits: 2,
      })); 
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calcularResultado();
      event.target.blur(); 
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <input
        className="text-center h-[60px] w-[300px] bg-cinzaEscuro text-[30px] placeholder-cinzaBemClaro placeholder:font-semibold rounded-md shadow-inner"
        type="number"
        id="numero"
        value={numero}
        onChange={inputNumero}
        onKeyDown={handleKeyDown}
        placeholder="Valor $:"
      />

      <button
        className="bg-verdeClaro h-[60px] w-[300px] text-[24px] font-semibold rounded-md hover:bg-verdeEscuro transition-all"
        onClick={calcularResultado}
      >
        Calcular
      </button>

      {resultado !== null && (
        <p className="flex flex-col justify-center items-center text-[30px] font-semibold shadow-md py-[20px]">
          Esse produto custa:{" "}
          <strong className="text-verdeClaro text-[40px] ">R$ {resultado}</strong>
        </p>
      )}
    </div>
  );
}

export default Converter;
