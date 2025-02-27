import React, { useState } from "react";
import { useDollar } from "./contextDollar";

function Discount() {
    const { dollar } = useDollar();

    const [valores, setValores] = useState({
        numero: "",
        discount: "",
    });

    const [resultadoDolar, setResultadoDolar] = useState("");
    const [resultadoReal, setResultadoReal] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValores((prevValores) => ({
            ...prevValores,
            [name]: value,
        }));
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            calcularDiscount();
            event.target.blur();
        }
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

        setResultadoDolar(valorFinal.toFixed(2)); 

        setResultadoReal((valorFinal * dollar).toFixed(2));
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-0">
                <input
                    className="text-center h-[60px] w-[300px] bg-cinzaEscuro text-[30px] placeholder-cinzaBemClaro placeholder:font-semibold rounded-md shadow-inner"
                    type="number"
                    id="numero"
                    name="numero"
                    value={valores.numero}
                    onChange={handleChange}
                    placeholder="Valor $:"
                />

                <div className="text-[30px]">-</div>

                <input
                    className="text-center h-[60px] w-[300px] bg-cinzaEscuro text-[30px] placeholder-cinzaBemClaro placeholder:font-semibold rounded-md shadow-inner"
                    type="number"
                    id="discount"
                    name="discount"
                    value={valores.discount}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Desconto %:"
                />
            </div>

            <button
                className="bg-verdeClaro h-[60px] w-[300px] text-[24px] font-semibold rounded-md transition-all hover:bg-verdeEscuro"
                onClick={calcularDiscount}
            >
                Calcular
            </button>

            {resultadoDolar && (
                <div className="flex flex-col justify-center items-center text-[20px] font-semibold shadow-md py-[20px]">
                    <strong className="text-verdeClaro text-[40px]">${resultadoDolar} dólares</strong>
                    <strong className="text-cinzaBemClaro text-[22px]"> ou R$ {resultadoReal} reais</strong>
                </div>
            )}
        </div>
    );
}

export default Discount;
