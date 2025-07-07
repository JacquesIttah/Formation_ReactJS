import styles from "./Button.module.css";

// ES6
// function Button(props) {
//     return <div className="Button">Test</div>;
// }

// Type Script
const Button = ({style,bgColor='blue', children}) => {
  console.log(styles);
  return <button  
  style={{...style ,backgroundColor:bgColor}}
  className={styles.Button}>Test mon bouton {children}</button>;
};

export default Button;
