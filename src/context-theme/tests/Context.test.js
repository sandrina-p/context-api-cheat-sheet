import React from "react";
import { ThemeProvider, ThemeConsumer } from "../";
import { shallow, mount } from "enzyme";

describe("<ThemeProvider />", () => {
  it("should pass the context correctly", () => {
    const tree = shallow(<ThemeProvider>My App Content</ThemeProvider>);

    expect(tree.props().value).toEqual({
      theme: "light",
      toggleTheme: expect.any(Function)
    });
  });

  it.skip("should render style with css variables", () => {
    const tree = shallow(<ThemeProvider>My App Content</ThemeProvider>);

    // Missing asserting styles
    /*expect(tree.find("style")).toEqual({
      ":root": {
        "--clr-bg": "white",
        "--clr-fg": "black"
      }
    });*/
  });

  it("should toggle theme when calling toggleTheme", () => {
    const tree = shallow(<ThemeProvider>My App Content</ThemeProvider>);

    tree.props().value.toggleTheme();

    expect(tree.props().value.theme).toBe("dark");

    tree.props().value.toggleTheme();

    expect(tree.props().value.theme).toBe("light");
  });
});

describe("<ThemeConsumer />", () => {
  it("should receive the context correctly", () => {
    const mockChildren = jest.fn(() => <p>Dummy text</p>);

    const tree = mount(
      <ThemeProvider>
        <ThemeConsumer>{mockChildren}</ThemeConsumer>
      </ThemeProvider>
    );

    expect(mockChildren).toHaveBeenCalledWith({
      theme: "light",
      toggleTheme: expect.any(Function)
    });
  });
});
