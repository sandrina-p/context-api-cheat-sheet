import React, { Component } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext({});
const { Provider, Consumer } = ThemeContext;

class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = this.toggleTheme.bind(this);

    this.variables = {
      light: {
        clrBg: "#fbfbfb",
        clrFg: "#333",
        clrCodeBg: "#f3f0ca",
        clrLink: "#008080"
      },
      dark: {
        clrBg: "#222",
        clrFg: "#fbfbfb",
        clrCodeBg: "#54534a",
        clrLink: "#00b8b8"
      }
    };

    /* Context state */
    this.state = {
      theme: "light"
    };

    /* Context method used to update the state */
    this.contextMethods = {
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    const { state, variables, contextMethods } = this;

    return (
      <Provider value={{ ...state, ...contextMethods }}>
        <style>
          {`:root {
          --clr-bg: ${variables[state.theme].clrBg};
          --clr-fg: ${variables[state.theme].clrFg};
          --clr-code-bg: ${variables[state.theme].clrCodeBg};
          --clr-link: ${variables[state.theme].clrLink};
        }`}
        </style>
        {this.props.children}
      </Provider>
    );
  }

  toggleTheme(modalId, modalProps = {}) {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  }
}

export { ThemeContext };
export { ThemeProvider };
export { Consumer as ThemeConsumer };
