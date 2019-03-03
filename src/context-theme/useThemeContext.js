import { useContext } from "react";
import { ThemeContext } from "./Context";

const isObjectValid = obj => Object.keys(obj).length !== 0;

// Thanks to Kent Dodds for the tip!
// - https://codesandbox.io/s/9q23vmr10o?initialpath=%2Fisolated%2Fexercises-final%2F03&module=%2Fsrc%2Fexercises-final%2F03.js

export default function useThemeContext() {
  const context = useContext(ThemeContext);

  // This makes sure the consumer is only used on components
  // scoped in the respective context
  if (isObjectValid(context)) {
    return context;
  }

  // ...otherwise will throw an error and save you time from possible bugs!
  throw new Error(
    `Toggle compound components cannot be rendered outside the Toggle component`
  );
}
