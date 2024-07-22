import { screen, render, fireEvent, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { SignInForm } from "../Components/SignInForm";
import React from "react";

describe("Sign In form testing", () => {
  test("check input field presence", () => {
    act(() => {
      render(
        <Router>
          <SignInForm />
        </Router>
      );
    });

    const signInEmailInput = screen.getByTestId("signIn-email-input-testid");
    expect(signInEmailInput).toBeInTheDocument();
    expect(signInEmailInput).toHaveAttribute("type", "email");
    expect(signInEmailInput).toHaveAttribute("name", "email");

    const signInPasswordInput = screen.getByTestId(
      "signIn-password-input-testid"
    );
    expect(signInPasswordInput).toBeInTheDocument();
    expect(signInPasswordInput).toHaveAttribute("type", "password");
    expect(signInPasswordInput).toHaveAttribute("name", "password");
  });

  test("test for input changing", () => {
    act(() => {
      render(
        <Router>
          <SignInForm />
        </Router>
      );
    });

    const signInEmailInput = screen.getByTestId("signIn-email-input-testid");
    const changingInputValueForEmail = {
      target: {
        value: "abcd@gmail.com",
      },
    };
    act(() => {
      fireEvent.change(signInEmailInput, changingInputValueForEmail);
    });

    const signInPasswordInput = screen.getByTestId(
      "signIn-password-input-testid"
    );
    const changingInputValueForPassword = {
      target: {
        value: "J_john@123",
      },
    };
    act(() => {
      fireEvent.change(signInPasswordInput, changingInputValueForPassword);
    });
    expect(signInEmailInput.value).toBe("abcd@gmail.com");
    expect(signInPasswordInput.value).toBe("J_john@123");
  });

  test("test sign up form", () => {
    act(() => {
      render(
        <Router>
          <SignInForm />
        </Router>
      );
    });

    const signUpButton = screen.getByTestId("show-user-signup-form");

    act(() => {
      fireEvent.click(signUpButton);
    });

    const signUpNameInput = screen.getByTestId("signUp-name-input-testid");
    expect(signUpNameInput).toBeInTheDocument();
    expect(signUpNameInput).toHaveAttribute("type", "text");
    expect(signUpNameInput).toHaveAttribute("name", "name");

    const signUpEmailInput = screen.getByTestId("signUp-email-input-testid");
    expect(signUpEmailInput).toBeInTheDocument();
    expect(signUpEmailInput).toHaveAttribute("type", "email");
    expect(signUpEmailInput).toHaveAttribute("name", "email");

    const signUpPasswordInput = screen.getByTestId(
      "signUp-password-input-testid"
    );
    expect(signUpPasswordInput).toBeInTheDocument();
    expect(signUpPasswordInput).toHaveAttribute("type", "password");
    expect(signUpPasswordInput).toHaveAttribute("name", "password");

    const signUpConfirmPassword = screen.getByTestId(
      "signUp-confirm_password-input-testid"
    );
    expect(signUpConfirmPassword).toBeInTheDocument();
    expect(signUpConfirmPassword).toHaveAttribute("type", "password");
    expect(signUpConfirmPassword).toHaveAttribute("name", "confirm_password");

    const signUpPhoneNumber = screen.getByTestId(
      "signUp-phone_number-input-testid"
    );
    expect(signUpPhoneNumber).toBeInTheDocument();
    expect(signUpPhoneNumber).toHaveAttribute("type", "text");
    expect(signUpPhoneNumber).toHaveAttribute("name", "phone_number");

    const changingInputValueForName = {
      target: {
        value: "John Doe",
      },
    };

    act(() => {
      fireEvent.change(signUpNameInput, changingInputValueForName);
    });

    expect(signUpNameInput.value).toBe("John Doe");

    const changingInputValueForEmail = {
      target: {
        value: "johnDoe@gmail.com",
      },
    };

    act(() => {
      fireEvent.change(signUpEmailInput, changingInputValueForEmail);
    });

    expect(signUpEmailInput.value).toBe("johnDoe@gmail.com");

    const changingInputValueForPassword = {
      target: {
        value: "J_john@1998",
      },
    };

    act(() => {
      fireEvent.change(signUpPasswordInput, changingInputValueForPassword);
    });

    expect(signUpPasswordInput.value).toBe("J_john@1998");

    const changingInputValueForConfirmPassword = {
      target: {
        value: "J_john@1998",
      },
    };

    act(() => {
      fireEvent.change(
        signUpConfirmPassword,
        changingInputValueForConfirmPassword
      );
    });

    expect(signUpConfirmPassword.value).toBe("J_john@1998");

    const chaingingInputValueForPhoneNumber = {
      target: {
        value: "9876543211",
      },
    };

    act(() => {
      fireEvent.change(signUpPhoneNumber, chaingingInputValueForPhoneNumber);
    });

    expect(signUpPhoneNumber.value).toBe("9876543211");
  });
});
