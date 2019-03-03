import React from "react";
import { Card, Controller } from "../components";
import { ThemeConsumer } from "../context-theme/";

function Toggle() {
  console.log("Using Children Function doesn't run on Theme update");
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
  <ThemeConsumer>
    { (context) => <Controller theme={ context } /> }
  </ThemeConsumer>
      `}
      </code>
      <ul>
        <li>
          💚 It's the most verbose solution but only re-render part of the
          component wrapped on the Consumer, when the Provider value updates.
          Because of that, I prefer this solution when I need the Context just
          on part of a component to avoid extra re-renders.
        </li>
        <li>
          To assert something inside the Consumer, using Enzyme Shallow, use{" "}
          <a
            href="https://airbnb.io/enzyme/docs/api/ShallowWrapper/renderProp.html"
            target="_blank"
          >
            <pre>.renderProp('children')</pre>
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
      </ul>
    </Card>
  );
}

export default Toggle;
