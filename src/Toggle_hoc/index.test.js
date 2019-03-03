import React from "react";
import Toggle from "./";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "../context-theme";

const toggleThemeMock = jest.fn();

const themeContext = {
  theme: "light",
  toggleTheme: toggleThemeMock
};

describe("<Toggle />", () => {
  it("should render correctly - shallow", () => {
    const hoc = shallow(<Toggle />);

    // The hoc's children is a function with a Context without Provider.
    // For that reason, we need to pass a mocked context to it by children function
    // And shallow it again...
    const tree = shallow(hoc.props().children(themeContext));

    // ... Having now access to the Component inside with a mocked context
    const Controller = tree.find("Controller");

    expect(Controller.prop("theme")).toBe("light");
    expect(Controller.prop("toggleTheme")).toEqual(toggleThemeMock);
  });

  it("should render correctly - mount with ThemeProvider", () => {
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
