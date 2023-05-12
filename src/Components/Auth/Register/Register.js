// Basic
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Back End
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
// Images
import logo from "../../../images/icon/logo-black.png";
// Style
import {
  Hint,
  InternalLine,
  AlreadyHaveAccount,
  ContinueBtn,
} from "./RegisterStyle";
// Global Style
import {
  AuthBox,
  Logo,
  Heading,
  FormSection,
  InputRow,
  InnerConditions,
  RequiredHeading,
  RequiredInput,
  ExternalLine,
  ExternalConditions,
} from "../GlobalAuth.js";
const Register = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordIsError, setPasswordIsError] = useState(false);
  const register = () => {
    // Reset Error
    setEmailIsError(false);
    setPasswordIsError(false);
    if (
      regex.test(email) &&
      password.length >= 6 &&
      password === confirmPassword
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            Navigate("/", { replace: true });
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    if (!regex.test(email)) {
      setEmailIsError(true);
    }
    if (password !== confirmPassword || password.length < 6) {
      setPasswordIsError(true);
    }
  };
  return (
    <>
      <AuthBox>
        <div className="top-floor">
          <Logo as={Link} to="/" className="header-logo">
            <img src={logo} alt="amazon" />
          </Logo>
          <FormSection>
            <Heading>Create account</Heading>
            <form>
              <InputRow>
                <RequiredHeading>Email</RequiredHeading>
                <RequiredInput
                  className={emailIsError ? "error-input" : ""}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailIsError ? (
                  <div className="error-input-text">
                    <span>i</span> Email Not Valid.
                  </div>
                ) : (
                  ""
                )}
              </InputRow>
              <InputRow>
                <RequiredHeading>Password</RequiredHeading>
                <RequiredInput
                  className={passwordIsError ? "error-input" : ""}
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  maxLength={20}
                  required
                  autoComplete=""
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordIsError ? (
                  <div className="error-input-text">
                    <span>i</span> Password max length 6.
                  </div>
                ) : (
                  // Hint Password
                  <Hint>
                    <span>i</span> Passwords must be at least 6 characters.
                  </Hint>
                )}
              </InputRow>
              <InputRow>
                <RequiredHeading>Re-enter password</RequiredHeading>
                <RequiredInput
                  className={passwordIsError ? "error-input" : ""}
                  type="password"
                  autoComplete=""
                  value={confirmPassword}
                  maxLength={20}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {passwordIsError ? (
                  <div className="error-input-text">
                    <span>i</span> Password not match.
                  </div>
                ) : (
                  ""
                )}
              </InputRow>
              <ContinueBtn
                className="continue"
                onClick={(e) => {
                  register(e);
                  e.preventDefault();
                }}
              >
                Continue
              </ContinueBtn>
              <InnerConditions>
                By creating an account,, you agree to Amazon's <br />
                <span>Conditions of Use</span> and <span>Privacy Notice</span>.
              </InnerConditions>
              <InternalLine />
              <AlreadyHaveAccount>
                <p>
                  Already have an account? <Link to="/signin">Sign In</Link>{" "}
                </p>
              </AlreadyHaveAccount>
            </form>
          </FormSection>
        </div>
      </AuthBox>
      <ExternalLine />
      <ExternalConditions>
        <span> Conditions of Use </span>
        <span> Privacy Notice </span>
        <span> Help </span>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </ExternalConditions>
    </>
  );
};

export default Register;
