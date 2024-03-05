import { useState } from "react";
import styles from "./ButtonList.module.css";
const BtnList=({onbuttonclick})=>
{const buttonNames = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];
const handelbtn=(va)=>
{
  onbuttonclick(va);
}

  return(<>
  
  <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} onClick={()=>handelbtn(buttonName)} className={styles.button}>{buttonName}</button>
      ))}
    </div>

  </>)
}

export default BtnList;