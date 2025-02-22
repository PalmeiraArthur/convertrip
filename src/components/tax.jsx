import React, { useState } from "react";
import { useTax } from "./contextTax";

function Tax() {
  const { tax } = useTax(); 
  const [valores, setValores] = useState({
    valorCompra: "", 
  });

  const [resultado, setResultado] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValores((prevValores) => ({
      ...prevValores,
      [name]: value,
    }));
  };

  const calcularTax = () => {
    const valorCompra = parseFloat(valores.valorCompra);

    if (isNaN(valorCompra)) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const taxVendas = tax / 100; 
    const valorTax = valorCompra * taxVendas; 
    const valorFinal = valorCompra + valorTax; 

    setResultado(valorFinal.toFixed(2)); 
  };

  return (
    <div>
      <h1>Cálculo de tax de vendas ({tax}%):</h1>

      <label htmlFor="valorCompra">Digite o valor da compra:</label>
      <input
        type="number"
        id="valorCompra"
        name="valorCompra"
        value={valores.valorCompra}
        onChange={handleChange}
        placeholder="Digite o valor"
      />

      <button onClick={calcularTax}>Calcular</button>

      {resultado && (
        <p>
          O valor final com tax de vendas é: <strong>R$ {resultado}</strong>
        </p>
      )}
    </div>
  );
}

export default Tax;