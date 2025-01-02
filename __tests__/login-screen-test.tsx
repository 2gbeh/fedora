import React from "react";
import { router } from "expo-router";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
//
import LoginScreen from "@/app/(stack)/(auth)/login/index";
import { Provider } from "react-redux";
import { store, useAppSelector } from "@/store/store.config";

jest.mock("@/store/store.config", () => ({
  useAppSelector: jest.fn(),
}));

jest.spyOn(store, 'useAppSelector').mockReturnValue('light');

describe("LoginScreen", () => {
  function setup() {
    const { getByText, getByPlaceholderText, ...rest } = render(
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
    const emailField = getByPlaceholderText(/enter email/i);
    const passwordField = getByPlaceholderText(/enter password/i);
    const forgotPasswordLnk = getByText(/forgot password?/i);
    const loginBtn = getByText(/log in/i);
    const registerLnk = getByText(/create account/i);
    return {
      ...rest,
      getByText,
      emailField,
      passwordField,
      forgotPasswordLnk,
      loginBtn,
      registerLnk,
    };
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render primary content correctly", () => {
    const {
      getByText,
      getAllByTestId,
      emailField,
      passwordField,
      forgotPasswordLnk,
      loginBtn,
      registerLnk,
    } = setup();
    //
    expect(getByText(/sign in/i)).toBeTruthy();
    expect(getByText(/welcome back/i)).toBeTruthy();
    expect(emailField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(forgotPasswordLnk).toBeTruthy();
    expect(getAllByTestId("button")).toHaveLength(1);
    expect(loginBtn).toBeTruthy();
    expect(registerLnk).toBeTruthy();
  });

  // it("should handle input events", () => {});
  // it("should handle forgot password event", () => {});
  // it("should handle login event", () => {});
  // it("should handle create account event", () => {});
});
