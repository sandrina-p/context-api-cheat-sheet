import React from "react";
import { Card, Controller, Notes } from "../components";
import { ThemeConsumer } from "../context-theme/"; // import directly the Consumer

function Toggle() {
  console.log("Using 'render prop' doesn't re-render on Theme update");
  return (
    <Card>
      <ThemeConsumer>
        {({ toggleTheme, theme }) => (
          <Controller
            way="render prop"
            toggleTheme={toggleTheme}
            theme={theme}
          />
        )}
      </ThemeConsumer>
      <code>
        {`
  <ThemeProvider.Consumer>
    { (context) => <Controller theme={ context } /> }
  </ThemeProvider.Consumer>
      `}
      </code>
      <Notes>
        <li>
          💚 It's the most verbose solution but only re-render part of the
          component wrapped on the Consumer, when the Provider value updates.
          Because of that, I prefer this solution when I need just part of the
          Context in a component, to avoid extra re-renders.
        </li>
        <li>
          To assert something inside the Consumer, using Enzyme Shallow, use{" "}
          <a
            href="https://airbnb.io/enzyme/docs/api/ShallowWrapper/renderProp.html"
            target="_blank"
          >
            <pre>.renderProp('children')(mockContext)</pre>
          </a>{" "}
          on the element that has the Consumer.{" "}
        </li>
        <li>
          A snapshot from Enzyme shallow will not output what's inside the
          Consumer. The output is:{" "}
          <pre>
            {"<"}ContextConsumer{">"}[function]{"</"}ContextConsumer>
          </pre>{" "}
          So, you need to take another snapshot by using{" "}
          <pre>.renderProp()</pre> as before.
        </li>
        <li>
          Read Component and tests at <b>/Toogle_children</b>.
        </li>
      </Notes>
    </Card>
  );
}

export default Toggle;
