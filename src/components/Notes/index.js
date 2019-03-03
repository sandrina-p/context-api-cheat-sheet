import React, { Fragment } from "react";
import Styles from "./index.module.css";

export default function Notes({ children }) {
  return (
    <Fragment>
      <p className={Styles.text}>Notes:</p>
      <ul className={Styles.list}>{children}</ul>
    </Fragment>
  );
}
