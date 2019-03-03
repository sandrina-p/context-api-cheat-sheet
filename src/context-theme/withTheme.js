import React from "react";
import { ThemeConsumer } from "./Context";

export default function withTheme(Component) {
  return ownProps => (
    <ThemeConsumer>
      {contextProps => <Component {...ownProps} {...contextProps} />}
    </ThemeConsumer>
  );
}
