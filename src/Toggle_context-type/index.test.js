import React from "react";
import Toggle from "./";
import { shallow, mount } from "enzyme";
import { ThemeContext, ThemeProvider, ThemeConsumer } from "../context-theme";
import PropTypes from "prop-types";

const toggleThemeMock = jest.fn();

const themeContext = {
  theme: "light",
  toggleTheme: toggleThemeMock
};

const contextTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.function
};

beforeEach(() => {
  // Enzyme doesn't know the new syntax contextType, so you need to pass it using the old syntax contextTypes.
  Toggle.contextTypes = contextTypes;
});

describe("<Toggle />", () => {
  it("should render correctly - shallow with mocked Context", () => {
    const tree = shallow(<Toggle />, {
      context: themeContext
    });

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

    expect(tree.find("Controller p").text()).toBe("Current theme: light");

    tree
      .find("button")
      .props()
      .onClick();

    expect(tree.find("Controller p").text()).toBe("Current theme: dark");
  });
});
