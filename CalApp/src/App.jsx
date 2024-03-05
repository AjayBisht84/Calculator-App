import AppName from "./Components/AppName";
import Input from "./Components/Input";
import BtnList from "./Components/BtnList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const[txtval,setTxtVal]=useState("");
  const btnclick=(v)=>
  {
    if (v === "C") {
      setTxtVal("");
    } else if (v === "=") {
      const result = eval(txtval);
      setTxtVal(result);
    } else {
      const newDisplayValue = txtval + v;
      setTxtVal(newDisplayValue);
    }
  }
  return (
    <>
      <center className="calculator">
        <AppName></AppName>
        <Input vals={txtval}></Input>
        <BtnList onbuttonclick={btnclick}></BtnList>
      </center>
    </>
  );
}

export default App;
