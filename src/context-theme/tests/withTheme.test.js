import React from "react";
import { ThemeProvider, withTheme } from "../";
import { mount } from "enzyme";

describe("withTheme()", () => {
  it("should receive correctly the props from context and custom props", () => {
    const DummyComponent = jest.fn(() => <p>Dummy text</p>);

    const Component = withTheme(DummyComponent);

    const tree = mount(
      <ThemeProvider>
        <Component name="world" />
      </ThemeProvider>
    );

    const passedProps = DummyComponent.mock.calls[0][0];

    expect(passedProps).toEqual({
      name: "world",
      theme: "light",
      toggleTheme: expect.any(Function)
    });
  });
});
