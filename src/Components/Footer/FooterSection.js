import React from "react";
import {
  Footer,
  SignInSection,
  ButtonSignIn,
  Register,
  ButtonBackTop,
  Col,
  Heading,
  Option,
  CopyRight,
} from "./FooterStyle";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/GlobalState";
const BackTop = () => {
  window.scrollTo(0, 0);
};
const FooterSection = () => {
  const { user } = useAuth();
  return (
    <div>
      {!user ? (
        <SignInSection>
          <hr />
          <div>
            <p>See personalized recommendations</p>
            <Link to="/signin">
              <ButtonSignIn>Sign in</ButtonSignIn>
            </Link>
            <Register>
              New customer? <Link to="/register">Start here</Link>.
            </Register>
          </div>
          <hr />
        </SignInSection>
      ) : (
        ""
      )}
      <ButtonBackTop onClick={() => BackTop()}>Back To Top</ButtonBackTop>
      <Footer className="container">
        <Col>
          <Heading>Get to Know Us</Heading>
          <Option>Careers</Option>
          <Option>Blog</Option>
          <Option>About Amazon</Option>
          <Option>Investor Relations</Option>
          <Option>Amazon Devices</Option>
          <Option>Amazon Science</Option>
        </Col>
        <Col>
          <Heading>Make Money with Us</Heading>
          <Option>Sell products on Amazon</Option>
          <Option>Sell on Amazon Business</Option>
          <Option>Become an Affiliate</Option>
          <Option>Advertise Your Products</Option>
          <Option>Self-Publish with Us</Option>
          <Option>Host an Amazon Hub</Option>
          <Option>See More Make Money with Us</Option>
        </Col>
        <Col>
          <Heading>Amazon Payment Products</Heading>
          <Option>Amazon Business Card</Option>
          <Option>Shop with Points</Option>
          <Option>Reload Your Balance</Option>
          <Option>Amazon Currency Converter</Option>
        </Col>
        <Col>
          <Heading>Let Us Help You</Heading>
          <Option>Amazon and COVID-19</Option>
          <Option>Your Account</Option>
          <Option>Your Orders</Option>
          <Option>Shipping Rates & Policies</Option>
          <Option>Returns & Replacements</Option>
          <Option>Manage Your Content and Devices</Option>
          <Option>Amazon Assistant</Option>
          <Option>Help</Option>
        </Col>
      </Footer>
      <CopyRight>
        <div>
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </CopyRight>
    </div>
  );
};

export default FooterSection;
