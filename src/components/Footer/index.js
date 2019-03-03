import React from "react";
import Styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>
        Missing something? Let me know on{" "}
        <a href="https://twitter.com/a_sandrina_p" target="_blank">
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://github.com/sandrina-p/context-api-cheat-sheet/tree/master/"
          target="_blank"
        >
          Github
        </a>
      </p>
      <p>
        Made with 👩‍💻 by{" "}
        <a href="http://sandrina-p.net" target="_blank">
          Sandrina Pereira
        </a>
      </p>
    </footer>
  );
}
