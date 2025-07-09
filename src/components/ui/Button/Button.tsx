import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  style: object;
  bgColor: "blue" | "green" | "red";
  children: string | React.ReactElement | Array<ReactElement | string>;
  type?: "button" | "submit" | "reset";
  //onButtonClick? Function;
  onButtonClick? () : undefined;
}

// ES6
// function Button(props) {
//     return <div className="Button">Test</div>;
// }

// Type Script
const Button = ({
  style,
  bgColor = "blue",
  children,
  type = "button",
  onButtonClick,
}: IButtonProps) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setClicked(false);
    }, 350);
  }, [clicked]);

  console.log(styles);
  return (
    <button
      style={{ ...style, backgroundColor: bgColor }}
      className={styles.Button + (clicked ? " " + styles.clicked : "")}
      type={type}
      onClick={(evt) => {
        setClicked(true);
        if (undefined !== onButtonClick) {
          onButtonClick(0);
        }
        //console.log('click on ' + evt.target.type)}
      }}
    >
      Test mon bouton {children}
    </button>
  );
};

export default Button;
