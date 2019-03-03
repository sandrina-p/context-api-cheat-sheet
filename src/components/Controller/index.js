import React from "react";
import Styles from "./index.module.css";

export default function Controller({ way, theme, toggleTheme }) {
  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.title}>Using {way}</h2>
      <div className={Styles.context}>
        <p className={Styles.paragraph}>Current theme: {theme}</p>
        <button onClick={toggleTheme} className={Styles.btn}>
          Toggle theme
        </button>
      </div>
    </div>
  );
}
