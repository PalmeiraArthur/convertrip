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

    setResultado(valorFinal.toLocaleString("pt-BR", 
      {minimumFractionDigits: 2, 
        maximumFractionDigits: 2,
      })); 
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calcularTax();
      event.target.blur(); 
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div>
        <h1 className="text-brancoAreia font-semibold text-[20px]">Taxa de vendas: </h1>
        <h1 className="text-verdeClaro text-[20px] font-semibold">({tax}%)</h1>
      </div>


      <input
        className="text-center h-[60px] w-[300px] bg-cinzaEscuro text-[30px] placeholder-cinzaBemClaro placeholder:font-semibold rounded-md shadow-inner"
        type="number"
        id="valorCompra"
        name="valorCompra"
        value={valores.valorCompra}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Valor $:"
      />

      <button className="bg-verdeClaro h-[60px] w-[300px] text-[24px] font-semibold rounded-md transition-all hover:bg-verdeEscuro"
        onClick={calcularTax}>Calcular</button>

      {resultado && (
        <p className="flex flex-col justify-center items-center text-[30px] font-semibold shadow-md py-[20px] px-[20px]">
          O valor final é: 
          <strong className="text-verdeClaro text-[40px] ">$ {resultado} dólares</strong>
        </p>
      )}
    </div>
  );
}

export default Tax;
