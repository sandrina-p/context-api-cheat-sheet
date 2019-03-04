import React from "react";
import { Card, Controller, Notes } from "../components";
import { ThemeContext } from "../context-theme/";

class Toggle extends React.Component {
  // If your project support experimental public class field syntax,
  // You can use it instead of the traditional contextType way (see bottom of the file)
  // static contextType = ThemeContext;

  render() {
    console.log("Renders on Theme update (from context-type)"); // happens the same to hoc and hooks

    const { toggleTheme, theme } = this.context;
    return (
      <Card>
        <Controller
          way="Class.contextType"
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <code>
          {`
  const { toggleTheme, theme } = this.context;
  // ...
  Toggle.contextType = ThemeContext;
      `}
        </code>
        <Notes>
          <li>
            Direct access to Context with <pre>this.context</pre> but can
            subscribe to only 1 context.{" "}
            <a
              href="https://reactjs.org/docs/context.html#consuming-multiple-contexts"
              target="_blank"
            >
              Learn how to consume Multiple Contexts
            </a>
          </li>
          <li>
            🐛Enzyme doesn't know what <pre>contextType</pre> is, so we need to
            use old deprecated <pre>contextTypes</pre> when testing with Mount
            or Shallow.
          </li>
          <li>
            ❓ If the Component is connected to a Container, I don't know to
            test using Enzyme shallow, only mount. Please let me know if you
            know how to do it.
          </li>
          <li>
            💡If you are using the experimental public class fields syntax, you
            can use a{" "}
            <a
              target="_blank"
              href="https://babeljs.io/docs/en/babel-plugin-proposal-class-properties"
            >
              static class field
            </a>{" "}
            to initialize contextType.
            <br />
            <pre>static contextType = ThemeContext;</pre>
          </li>
          <li>
            Read Component and tests at <b>/Toogle_context-type</b>.
          </li>
        </Notes>
      </Card>
    );
  }
}

Toggle.contextType = ThemeContext;

export default Toggle;
