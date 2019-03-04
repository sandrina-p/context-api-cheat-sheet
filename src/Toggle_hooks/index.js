import React from "react";
import { Card, Controller, Notes } from "../components";
import { useThemeContext } from "../context-theme/";

export default function Toggle() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <Card>
      <Controller way="hooks" toggleTheme={toggleTheme} theme={theme} />
      <code>{`
  const {(toggleTheme, theme)} = useContext(ThemeContext);
      `}</code>

      <Notes>
        <li>
          Similar to how <pre>Class.contextType</pre> works but with support to
          multiple contexts.
        </li>
        <li>
          Enzyme Shallow doesn't support Hooks yet (v3.8) (see their{" "}
          <a
            target="_blank"
            href="https://github.com/airbnb/enzyme/issues/2011"
          >
            checklist roadmap
          </a>
          ) but it's possible with Enzyme Mount or by using{" "}
          <a
            target="_blank"
            href="https://github.com/kentcdodds/react-testing-library"
          >
            react-testing-library
          </a>{" "}
          instead. Check a{" "}
          <a
            target="_blank"
            href="https://github.com/kentcdodds/react-testing-library-examples/blob/master/src/__tests__/react-hooks-context.js"
          >
            test example
          </a>
          .
        </li>
        <li>
          Read Component and tests at <b>/Toogle_hooks</b>.
        </li>
      </Notes>
    </Card>
  );
}
