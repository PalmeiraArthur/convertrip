import React, { useState } from "react";
import Converter from "../components/converter";
import Tax from "../components/tax";
import Discount from "../components/discount";

function Main() {
  const [selecao, setSelecao] = useState("converter"); 

  return (
    <div className="container">
      <h1>Escolha a opção</h1>

      
      <div className="button-group">
        <button onClick={() => setSelecao("converter")}>Converter</button>
        <button onClick={() => setSelecao("tax")}>Taxa</button>
        <button onClick={() => setSelecao("discount")}>Discount</button>
      </div>

      
      {selecao === "converter" && <Converter />}
      {selecao === "tax" && <Tax />}
      {selecao === "discount" && <Discount />}
    </div>
  );
}

export default Main;
