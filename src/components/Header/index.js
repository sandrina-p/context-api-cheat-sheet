import React from "react";
import Styles from "./index.module.css";

export default function Header() {
  return (
    <div className={Styles.wrapper}>
      <h1>React Context - CheatSheet</h1>
      <p>
        The new Context API is one of the best features of React 16. At the same
        time is one of the features where I see more devs struggling with it
        especially when accessing the context. Since its release I've been
        facing / asking / answering the same questions over and over again: How
        to use or how to test something that involves React Context API and
        testing with Enzyme.
      </p>
      <p>
        I made this interactive guide on{" "}
        <a target="_blank" href="https://codesandbox.io/s/ymxk18rkyz">
          Codesandbox
        </a>{" "}
        about each way of using Context API and the respective demos. This is my
        journey of discoveries related to React Context. If you find something
        wrong, missing or outdated, please let me know and I'll update the
        project 👩‍💻
      </p>
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
