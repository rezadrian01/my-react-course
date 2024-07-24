import { useState } from "react";

import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `Email: ${enteredValue.email} \nPassword: ${enteredValue.password}`
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          value={emailValue}
          onChange={(event) => handleEmailChange(event.target.value)}
          onBlur={() => handleEmailBlur("email")}
          id="email"
          type="email"
          name="email"
          error={emailHasError && "Please enter a valid email"}
        />

        <Input
          label="Password"
          value={passwordValue}
          onChange={(event) => handlePasswordChange(event.target.value)}
          onBlur={() => handlePasswordBlur("password")}
          id="password"
          type="password"
          name="password"
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
