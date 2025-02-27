import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Converter from "../components/converter";
import Tax from "../components/tax";
import Discount from "../components/discount";
import { useDollar } from "../components/contextDollar";
import Navbar from "../components/navbar";

function Main() {
    const [selecao, setSelecao] = useState("converter");

    return (
        <div className="text-center flex flex-col gap-10 ">

            <Navbar></Navbar>


            <div className="bg-cinzaClaro flex flex-col justify-start items-center mx-2 gap-6 rounded-md h-[620px]">
                <div className="bg-cinzaClaro shadow-md h-[58px] w-[350px] flex justify-center items-center gap-5 rounded-lg mt-2 font-semibold">

                    <button
                        className={`px-4 py-2 rounded-lg transition-colors duration-200  ${selecao === "converter"
                            ? "bg-verdeClaro text-white shadow-inner"
                            : "bg-cinzaBemClaro text-cinzaClaro  hover:bg-cinzaEscuro transition-all"
                            }`}
                        onClick={() => setSelecao("converter")}
                    >
                        Converter
                    </button>


                    <button
                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${selecao === "discount"
                            ? "bg-verdeClaro text-white shadow-inner"
                            : "bg-cinzaBemClaro text-cinzaClaro hover:bg-cinzaEscuro transition-all"
                            }`}
                        onClick={() => setSelecao("discount")}
                    >
                        Desconto
                    </button>

                    <button
                        className={`px-4 py-2 rounded-lg transition-colors duration-200 ${selecao === "tax"
                            ? "bg-verdeClaro text-white shadow-inner"
                            : "bg-cinzaBemClaro text-cinzaClaro hover:bg-cinzaEscuro transition-all"
                            }`}
                        onClick={() => setSelecao("tax")}
                    >
                        Taxa
                    </button>


                </div>

                {selecao === "converter" && <Converter />}
                {selecao === "tax" && <Tax />}
                {selecao === "discount" && <Discount />}
            </div>
        </div>

    );
}

export default Main;
