import type React from "react";
import type { ReactElement } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  style:object;
  bgColor:'blue' | 'green' | 'red';
  children:string|React.ReactElement|Array<ReactElement|string>
}

// ES6
// function Button(props) {
//     return <div className="Button">Test</div>;
// }

// Type Script
const Button = ({style,bgColor='skyblue', children}:IButtonProps) => {
  console.log(styles);
  return <button  
  style={{...style ,backgroundColor:bgColor}}
  className={styles.Button}>Test mon bouton {children}</button>;
};

export default Button;
