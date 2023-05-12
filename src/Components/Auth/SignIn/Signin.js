// Basic
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Back End
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
// Images
import logo from "../../../images/icon/logo-black.png";
import errorIcon from "../../../images/icon/error-icon.png";
// Style
import {
  NewAccount,
  CreateNewAccount,
  CreateNewAccountBtn,
  UserStatus,
  ForgotPassword,
  SignInBtn,
} from "./SigninStyle";
// Global Style
import {
  AuthBox,
  Logo,
  PromiseBox,
  CaptionBox,
  Heading,
  FormSection,
  InputRow,
  Check,
  InnerConditions,
  RequiredHeading,
  RequiredInput,
  ExternalLine,
  ExternalConditions,
} from "../GlobalAuth.js";

const SignIn = () => {
  const [promise, setPromise] = useState(null);
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsError, setPasswordIsError] = useState(false);
  const Navigate = useNavigate();
  // Valid Email
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const signIn = (e) => {
    e.preventDefault();
    setEmailIsError(false);
    setPasswordIsError(false);

    if (regex.test(email) && password.length >= 6) {
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            Navigate("/", { replace: true });
          }
        })
        .catch(() => {
          setPromise(false);
        });
    }

    if (!regex.test(email)) {
      setEmailIsError(true);
    }

    if (password.length < 6) {
      setPasswordIsError(true);
    }
  };
  return (
    <>
      <AuthBox>
        <Logo as={Link} to="/" className="header-logo">
          <img src={logo} alt="amazon" />
        </Logo>
        {promise === false ? (
          <PromiseBox className="box-error">
            <img src={errorIcon} alt="Error"></img>
            <CaptionBox>
              <h4>There was a problem</h4>
              <Check>We're sorry. Email or Password not found.</Check>
            </CaptionBox>
          </PromiseBox>
        ) : (
          ""
        )}
        <FormSection>
          <Heading>Sign in</Heading>
          <form>
            <InputRow>
              <RequiredHeading>Email</RequiredHeading>
              <RequiredInput
                className={emailIsError ? "error-input" : ""}
                type="text"
                value={email}
                autoComplete=""
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailIsError ? (
                <div className="error-input-text">
                  <span>i</span> Email Not Valid or Found.
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
                autoComplete=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordIsError ? (
                <div className="error-input-text">
                  <span>i</span> Password Not Vaild.
                </div>
              ) : (
                ""
              )}
            </InputRow>
            <SignInBtn onClick={signIn}>Sign in</SignInBtn>
            <InnerConditions>
              By continuing, you agree to Amazon's{" "}
              <span>Conditions of Use</span> and <span>Privacy Notice</span>.
            </InnerConditions>
            <ForgotPassword as={Link} to="/forgot_password">
              Forgot your password?
            </ForgotPassword>
          </form>
        </FormSection>
        <UserStatus>
          <NewAccount>
            <hr />
            <span>New to Amazon?</span>
          </NewAccount>
          <CreateNewAccount>
            <Link to="/register">
              <CreateNewAccountBtn>
                Create your Amazon account
              </CreateNewAccountBtn>
            </Link>
          </CreateNewAccount>
        </UserStatus>
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

export default SignIn;
