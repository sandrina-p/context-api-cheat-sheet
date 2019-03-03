import React from "react";
import Toggle from "./";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "../context-theme";

describe("<Toggle />", () => {
  it("should render correctly - shallow", () => {
    const toggleThemeMock = jest.fn();

    const tree = shallow(<Toggle />);

    // renderProp is available on Enzyme 3.8
    const Consumer = tree.find("ContextConsumer");

    const treeRendered = Consumer.renderProp("children")({
      theme: "light",
      toggleTheme: toggleThemeMock
    });

    expect(treeRendered.prop("theme")).toBe("light");
  });

  it("should render correctly - mount", () => {
    // When using mount you always need to pass the Provider
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
