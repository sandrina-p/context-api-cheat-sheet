import React from "react";
import Styles from "./index.module.css";

export default function Card({ children }) {
  return <div className={Styles.card}>{children}</div>;
}
