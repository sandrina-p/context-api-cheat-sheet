import React from "react";
import ReactDOM from "react-dom";
import { Header, Footer } from "./components";
import ToggleRenderProp from "./Toggle_render-prop";
import ToggleContextType from "./Toggle_context-type";
import ToggleHoc from "./Toggle_hoc";
import ToggleHooks from "./Toggle_hooks";

import Styles from "./index.module.css";
import { ThemeProvider } from "./context-theme";

function App() {
  return (
    <div>
      <ThemeProvider>
        <div className={Styles.App}>
          <Header />

          <ToggleRenderProp />
          <ToggleContextType />
          <ToggleHoc />
          <ToggleHooks />

          <Footer />
        </div>
      </ThemeProvider>
      {/* If you try to use a Consumer outside
      its Provider, it will throw an error
      - see how at context-theme/useThemeContext.js */}
      {/* <ToggleHooks /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
