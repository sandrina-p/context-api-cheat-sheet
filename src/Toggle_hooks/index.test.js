import React from "react";
import Toggle from "./";
import { shallow, mount } from "enzyme";
import { ThemeProvider, ThemeConsumer } from "../context-theme";

describe("<Toggle />", () => {
  it("should render correctly - shallow", () => {
    // Enzyme doesn't support hooks with shallow at the moment (3.9).
    // Error: Hooks can only be called inside the body of a function component.
    const tree = shallow(<Toggle />);
  });

  it("should render correctly - mount", () => {
    const tree = mount(
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>
    );

    expect(tree.find("p").text()).toBe("Current theme: light");

    tree
      .find("button")
      .props()
      .onClick();

    expect(tree.find("p").text()).toBe("Current theme: dark");
  });
});
