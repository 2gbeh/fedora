import React from "react";
import { router } from "expo-router";
import { render, fireEvent } from "@testing-library/react-native";
//
import WelcomeScreen from "@/app/(stack)/(auth)/index";

describe("WelcomeScreen", () => {
  function setup() {
    const { getAllByTestId, getByText } = render(<WelcomeScreen />);
    const buttons = getAllByTestId("button");
    const loginBtn = getByText(/log in/i);
    const registerBtn = getByText(/create account/i);
    return { buttons, loginBtn, registerBtn };
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render login and register buttons only", () => {
    const { buttons, loginBtn, registerBtn } = setup();
    //
    expect(buttons).toHaveLength(2);
    expect(loginBtn).toBeTruthy();
    expect(registerBtn).toBeTruthy();
  });
  //
  it("should handle login event", () => {
    const { loginBtn } = setup();
    //
    fireEvent.press(loginBtn);
    expect(router.replace).toHaveBeenCalledWith("/login");
  });
  it("should handle register event", () => {
    const { registerBtn } = setup();
    //
    fireEvent.press(registerBtn);
    expect(router.replace).toHaveBeenCalledWith("/register");
  });
});
