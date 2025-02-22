import React, { useState } from "react";

function Discount() {
  const [valores, setValores] = useState({
    numero: "",
    discount: "",
  });

  const [resultado, setResultado] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValores((prevValores) => ({
      ...prevValores,
      [name]: value,
    }));
  };

  const calcularDiscount = () => {
    const numero = parseFloat(valores.numero);
    const discount = parseFloat(valores.discount);

    if (isNaN(numero) || isNaN(discount)) {
      alert("Por favor, insira valores válidos.");
      return;
    }

    const valorDiscount = (discount / 100) * numero; 
    const valorFinal = numero - valorDiscount; 

    setResultado(valorFinal.toFixed(2)); 
  };

  return (
    <div>
      <h1>Cálculo de discount:</h1>

      <label htmlFor="numero">Digite o valor:</label>
      <input
        type="number"
        id="numero"
        name="numero"
        value={valores.numero}
        onChange={handleChange}
        placeholder="Digite o valor"
      />

      <label htmlFor="discount">Discount (%):</label>
      <input
        type="number"
        id="discount"
        name="discount"
        value={valores.discount}
        onChange={handleChange}
        placeholder="Digite o discount"
      />

      <button onClick={calcularDiscount}>Calcular</button>

      {resultado && (
        <p>
          O valor final com discount é: <strong>R$ {resultado}</strong>
        </p>
      )}
    </div>
  );
}

export default Discount;
