import React, { useState } from "react";
import { useDollar } from "../components/contextDollar";
import { useTax } from "../components/contextTax";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function Settings() {
  const { dollar, setDollar } = useDollar();
  const [newDollar, setNewDollar] = useState(dollar);
  const [manualValue, setmanualValue] = useState(dollar);
  const [loading, setLoading] = useState(false);
  const [optionDolar, setOptionDolar] = useState("manual");
  const [showConfirmationDolar, setShowConfirmationDolar] = useState(false);
  const navigate = useNavigate();
  const handleNavigateToSettings = () => {
    navigate("/");
  };


  const { tax, setTax } = useTax();
  const [newTax, setNewTax] = useState(tax);
  const [optionTax, setOptionTax] = useState("manual");
  const [showConfirmationTax, setShowConfirmationTax] = useState(false);


  const taxsPorCondado = [
    { value: 6.0, description: "6,0% - Condados sem tax adicional (Estado)" },
    { value: 6.5, description: "6,5% - Orange County (Orlando)" },
    { value: 7.0, description: "7,0% - Miami-Dade County (Miami)" },
    { value: 7.5, description: "7,5% - Hillsborough County (Tampa)" },
    { value: 8.0, description: "8,0% - Jasper County (Jasper)" },
    { value: 7.0, description: "7,0% - Duval County (Jacksonville)" },
    { value: 6.5, description: "6,5% - Lee County (Fort Myers)" },
    { value: 7.5, description: "7,5% - Marion County (Ocala)" },
    { value: 7.0, description: "7,0% - Broward County (Fort Lauderdale)" },
    { value: 6.5, description: "6,5% - Palm Beach County (West Palm Beach)" },
    { value: 7.0, description: "7,0% - Pinellas County (St. Petersburg)" },
    { value: 7.5, description: "7,5% - Alachua County (Gainesville)" },
    { value: 6.5, description: "6,5% - St. Johns County (St. Augustine)" },
    { value: 7.0, description: "7,0% - Seminole County (Sanford)" },
    { value: 8.0, description: "8,0% - Jennings County (Jennings)" },
    { value: 7.5, description: "7,5% - Leon County (Tallahassee)" },
    { value: 7.0, description: "7,0% - Volusia County (Daytona Beach)" },
    { value: 6.5, description: "6,5% - Sarasota County (Sarasota)" },
    { value: 7.0, description: "7,0% - Brevard County (Cocoa Beach)" },
    { value: 7.5, description: "7,5% - Escambia County (Pensacola)" },
  ];


  const refreshDollarManual = () => {
    setDollar(Number(newDollar));
    setmanualValue(Number(newDollar));
  };

  const obterCotacaoDolar = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://v6.exchangerate-api.com/v6/fd3ba5123293c5e59a2c7489/latest/USD");
      const data = await response.json();
      if (data.result === "success") {
        const cotacao = data.conversion_rates.BRL;
        setDollar(cotacao);
        setNewDollar(cotacao);
      } else {
        alert("Erro ao obter a cotação do dólar.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao buscar cotação do dólar.");
    }
    setLoading(false);
  };

  const handleOptionDolarChange = (e) => {
    setOptionDolar(e.target.value);
    if (e.target.value === "dolar") {
      obterCotacaoDolar();
    } else {
      setDollar(manualValue);
      setNewDollar(manualValue);
    }
  };

  const salvarDolar = () => {
    if (optionDolar === "manual") {
      setDollar(Number(newDollar));
      setmanualValue(Number(newDollar));
    } else {
      setDollar(dollar);
      setNewDollar(dollar);
    }
    setShowConfirmationDolar(true);
    setTimeout(() => setShowConfirmationDolar(false), 2000);
  };


  const handleOptionTaxChange = (e) => {
    setOptionTax(e.target.value);
    if (e.target.value !== "manual") {
      const taxSelecionada = taxsPorCondado.find((condado) => condado.value === parseFloat(e.target.value));
      setNewTax(taxSelecionada.value);
    }
  };

  const salvarTax = () => {
    if (optionTax === "manual") {
      setTax(Number(newTax));
    } else {
      const taxSelecionada = taxsPorCondado.find((condado) => condado.value === parseFloat(optionTax));
      setTax(taxSelecionada.value);
    }
    setShowConfirmationTax(true);
    setTimeout(() => setShowConfirmationTax(false), 2000);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-cinzaEscuro h-screen mt-[60px] pt-[8px] relative flex flex-col gap-[20px] rounded-t-lg shadow-md">
        <div className="flex justify-center items-center">
          <svg onClick={handleNavigateToSettings} className="absolute left-3"
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#5f6368"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
          <h1 className="text-[23px] font-semibold">Configurações</h1>
        </div>

        <div className="bg-cinzaClaro mx-[8px] rounded-md shadow-md p-[10px] flex flex-col justify-center items-center gap-4 text-[]" >
          <h2>Dólar</h2>
          <select id="optionDolar" value={optionDolar} onChange={handleOptionDolarChange}>
            <option value="manual">Digitar manualmente</option>
            <option value="dolar">Usar cotação atual do dólar</option>
          </select>

          {optionDolar === "manual" ? (
            <div>
              <input
                type="number"
                id="dollar"
                value={newDollar}
                onChange={(e) => setNewDollar(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p>Dollar atual (cotação): {dollar}</p>
            </div>
          )}

          <button onClick={salvarDolar}>Salvar Cotação do Dólar</button>
          {showConfirmationDolar && (
            <div className="confirmation-popup">
              <p>Value do dólar salvo com sucesso!</p>
            </div>
          )}

        </div>



        <h2>Configuração da Tax de Vendas</h2>
        <label htmlFor="optionTax">Escolha uma opção:</label>
        <select id="optionTax" value={optionTax} onChange={handleOptionTaxChange}>
          <option value="manual">Digitar tax manualmente</option>
          {taxsPorCondado.map((condado, index) => (
            <option key={index} value={condado.value}>
              {condado.description}
            </option>
          ))}
        </select>

        {optionTax === "manual" ? (
          <div>
            <label htmlFor="tax">Digite a tax:</label>
            <input
              type="number"
              id="tax"
              value={newTax}
              onChange={(e) => setNewTax(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <p>Tax selecionada: {optionTax}%</p>
          </div>
        )}

        <button onClick={salvarTax}>Salvar Tax de Vendas</button>
        {showConfirmationTax && (
          <div className="confirmation-popup">
            <p>Tax de vendas salva com sucesso!</p>
          </div>
        )}
      </div>

    </div>

  );
}

export default Settings;