import styles from "./Button.module.css";

// ES6
// function Button(props) {
//     return <div className="Button">Test</div>;
// }

// Type Script
const Button = (props) => {
   return <button className={styles.Button}>Test mon bouton</button>;
};

export default Button;
