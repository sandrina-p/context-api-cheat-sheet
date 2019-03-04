import React from "react";
import Styles from "./index.module.css";

export default function Header() {
  return (
    <div className={Styles.wrapper}>
      <h1>React Context - CheatSheet</h1>
      <p>
        The new Context API is one of the hottest features in React 16. However,
        it is one of those features where I see more devs struggling with,
        especially when consuming the context. Since its release I've been
        facing / asking / answering the same questions over and over again: How
        to use or test a component that consumes React Context using render
        prop, HOC, contextType or hooks.
      </p>
      <p>
        I made this interactive guide on{" "}
        <a target="_blank" href="https://codesandbox.io/s/7z3vpo3916">
          Codesandbox
        </a>{" "}
        about each way of consuming and testing React Context API. This is my
        journey of discoveries related to it. If you find something wrong,
        missing or outdated, please let me know and I'll update it. 👩‍💻
      </p>
      <hr />
      <p>
        Before using any of the following, make sure to{" "}
        <a
          target="_blank"
          href="https://reactjs.org/docs/context.html#when-to-use-context"
        >
          know when to use React Context
        </a>
        .
      </p>
      <p>
        You can find the demo code at <b>/src/Toggle_*</b> for each respective
        way.
      </p>
    </div>
  );
}
