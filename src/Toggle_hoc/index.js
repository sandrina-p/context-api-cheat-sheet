import React from "react";
import { Card, Controller, Notes } from "../components";
import { withTheme } from "../context-theme/";

// It can be a class too
function Toggle({ theme, toggleTheme }) {
  // These props are passed by the HOC wrap at the end of the file.

  return (
    <Card>
      <Controller way="HOC" toggleTheme={toggleTheme} theme={theme} />
      <code>{`
  function Toggle({ theme, toggleTheme }) {
     // Those props are the theme context...
  }

  // ...that wrapped Toggle
  withTheme(Toggle);
      `}</code>
      <Notes>
        <li>
          Wrap the whole Component in a{" "}
          <a
            target="_blank"
            href="https://reactjs.org/docs/higher-order-components.html"
          >
            HOC
          </a>{" "}
          and have direct access to the Context by props. 😶This is an advanced
          React pattern and it might be a little confunsing for newcomers
          because they might not understand where a prop comes from if not well
          documented.
        </li>
        <li>
          To test using Enzyme Shallow, we need a workaround that consists in
          shallowing the hoc and the children:
          <br />
          <pre>
            const hoc = shallow({"<"}Toggle{"/>"});
            <br />
            const tree = shallow(hoc.props().children(themeContext));
          </pre>{" "}
        </li>
        <li>
          Read Component and tests at <b>/Toogle_hoc</b> for more info.
        </li>
      </Notes>
    </Card>
  );
}

// wrap Toggle with the theme Context.
export default withTheme(Toggle);
