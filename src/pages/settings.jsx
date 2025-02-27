import React, { useState, useEffect } from "react";
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
    { id: "Orlando 6.5", value: 6.50, description: "6,5% - Orange County (Orlando)" },
    { id: "Palmbeach 6.5", value: 6.50, description: "6,5% - Palm Beach County (West Palm Beach)" },
    { id: "Miami 7.0", value: 7.00, description: "7,0% - Miami-Dade County (Miami)" },
    { id: "Fort Lauderdale 7.0", value: 7.00, description: "7,0% - Broward County (Fort Lauderdale)" },
    { id: "Daytona Beach 7.0", value: 7.00, description: "7,0% - Volusia County (Daytona Beach)" },
    { id: "Davenport 7.0", value: 7.00, description: "7,0% - Polk Country (Davenport)" },
    { id: "Tampa 7.5", value: 7.5, description: "7,5% - Hillsborough County (Tampa)" },
    { id: "Jasper 8.0", value: 8.0, description: "8,0% - Jasper County (Jasper)" },
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
    const selectedOption = e.target.value;
    setOptionDolar(selectedOption);
    localStorage.setItem("optionDolar", selectedOption);

    if (selectedOption === "dolar") {
      obterCotacaoDolar();
    } else {
      setDollar(manualValue);
      setNewDollar(manualValue);
    }
  };


  const salvarDolar = () => {
    if (optionDolar === "manual") {
      const formattedDollar = Number(newDollar.toString().replace(",", "."));
      setDollar(formattedDollar);
      setmanualValue(formattedDollar);
    } else {
      setDollar(dollar);
      setNewDollar(dollar);
    }
    setShowConfirmationDolar(true);
    setTimeout(() => setShowConfirmationDolar(false), 2000);
  };



  const handleOptionTaxChange = (e) => {
    const selectedId = e.target.value;
    setOptionTax(selectedId);
    localStorage.setItem("optionTax", selectedId);

    if (selectedId !== "manual") {
      const taxSelecionada = taxsPorCondado.find((condado) => condado.id === selectedId);
      if (taxSelecionada) {
        setNewTax(taxSelecionada.value);
      }
    }
  };



  const salvarTax = () => {
    if (optionTax === "manual") {
      setTax(Number(newTax));
    } else {
      const taxSelecionada = taxsPorCondado.find((condado) => condado.id === optionTax);
      if (taxSelecionada) {
        setTax(taxSelecionada.value);
      }
    }
    setShowConfirmationTax(true);
    setTimeout(() => setShowConfirmationTax(false), 2000);
  };



  useEffect(() => {
    const savedOptionDolar = localStorage.getItem("optionDolar");
    if (savedOptionDolar) {
      setOptionDolar(savedOptionDolar);
      if (savedOptionDolar === "dolar") {
        obterCotacaoDolar();
      }
    }

    const savedOptionTax = localStorage.getItem("optionTax");
    if (savedOptionTax) {
      setOptionTax(savedOptionTax);
      if (savedOptionTax !== "manual") {
        setNewTax(parseFloat(savedOptionTax));
      }
    }
  }, []);
  const handleKeyDownDolar = (event) => {
    if (event.key === "Enter") {
      salvarDolar();
      event.target.blur();
    }
  };
  const handleKeyDownTaxa = (event) => {
    if (event.key === "Enter") {
      salvarTax();
      event.target.blur();
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-cinzaEscuro h-screen mt-[60px] pt-[8px] relative flex flex-col gap-[20px] rounded-t-lg shadow-md">
        <div className="flex justify-center items-center">
          <svg onClick={handleNavigateToSettings} className="absolute left-3 cursor-pointer hover:fill-verdeClaro "
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

        <div className="bg-cinzaClaro mx-[8px] rounded-md shadow-md  flex flex-col justify-center items-center gap-6 text-[20px] py-4 " >
          <h2 className="font-semibold text-[25px]">Dólar</h2>
          <select id="optionDolar" value={optionDolar} onChange={handleOptionDolarChange} className="bg-cinzaClaro shadow-md px-4 py-3 ">
            <option value="manual">Digitar manualmente</option>
            <option value="dolar">Usar cotação atual do dólar</option>
          </select>

          {optionDolar === "manual" ? (
            <div className="relative w-48 flex items-center">
              <span className="absolute left-3 text-verdeClaro text-[36px] font-bold">R$</span>
              <input
                className="pl-10 text-center bg-cinzaClaro shadow-md text-verdeClaro font-bold text-[36px] w-48 h-16"
                type="number"
                id="dollar"
                value={newDollar}
                onKeyDown={handleKeyDownDolar}
                onChange={(e) => setNewDollar(e.target.value)}
              />
            </div>

          ) : (
            <div className="flex flex-row justify-center items-center bg-cinzaClaro shadow-md text-verdeClaro font-bold text-[36px] w-48 h-16 ">
              <p>R$ {dollar}</p>
            </div>
          )}

          <button className="bg-verdeClaro py-2 px-6 rounded-md hover:bg-verdeEscuro transition-all" onClick={salvarDolar}>Salvar mudanças</button>
          {showConfirmationDolar && (
            <div className="confirmation-popup text-verdeClaro ">
              <p>Valor do dólar salvo com sucesso!</p>
            </div>
          )}

        </div>


        <div className="bg-cinzaClaro mx-[8px] rounded-md shadow-md  flex flex-col justify-center items-center gap-6 text-[20px] py-4 ">
          <h2 className="font-semibold text-[25px]">Taxa de Vendas</h2>

          <select id="optionTax" value={optionTax} onChange={handleOptionTaxChange} className="bg-cinzaClaro shadow-md px-2 py-3 w-[350px]">
            <option value="manual">Digitar taxa manualmente</option>
            {taxsPorCondado.map((condado) => (
              <option key={condado.id} value={condado.id}>
                {condado.description}
              </option>
            ))}
          </select>


          {optionTax === "manual" ? (
            <div className="relative w-48 flex items-center">
              <input
                className="text-center bg-cinzaClaro shadow-md text-verdeClaro font-bold text-[36px] w-48 h-16"
                type="number"
                id="tax"
                value={newTax}
                onKeyDown={handleKeyDownTaxa}
                onChange={(e) => setNewTax(e.target.value)}
              />
              <span className="absolute right-3 ml-2 text-verdeClaro text-[36px] font-bold">%</span>
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center text-center bg-cinzaClaro shadow-md text-verdeClaro font-bold text-[36px] p-[10px]">
              <p className="whitespace-pre-line"> {optionTax}%</p>
            </div>
          )}

          <button className="bg-verdeClaro py-2 px-6 rounded-md hover:bg-verdeEscuro transition-all" onClick={salvarTax}>Salvar Tax de Vendas</button>
          {showConfirmationTax && (
            <div className="confirmation-popup">
              <p className="text-verdeClaro" >Taxa de vendas salva com sucesso!</p>
            </div>
          )}
        </div>

      </div>


    </div>

  );
}

export default Settings;