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

    setResultado((Number(numero) * dollar).toFixed(2)); 
  };

  return (
    <div>
      <h1>dollar: {dollar}</h1>

      <label htmlFor="numero">Digite o valor:</label>
      <input
        type="number"
        id="numero"
        value={numero}
        onChange={inputNumero}
        placeholder="Digite o valor"
      />

      <button onClick={calcularResultado}>Calcular</button>

      {resultado !== null && (
        <p>
          Resultado: <strong>{resultado}</strong>
        </p>
      )}
    </div>
  );
}

export default Converter;
