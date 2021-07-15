import React, { useState } from "react";
import LoginPage from "../login";
import SignUpPage from "../sign-up";
import "./landing.component.scss";
import JiraLogo from "@/app/assets/images/jira-logo.png";

const LandingPage: React.FC = () => {
  const [page, setPage] = useState("login");

  return (
    <div className="landing-page">
      <div className="landing-page__bg"></div>
      <div className="landing-page__form">
        <div className="landing-page__form__inner">
          <div className="landing-page__logo">
            <img src={JiraLogo} alt={"Jira"} />
          </div>
          {page === "login" ? (
            <LoginPage handleSignUp={() => setPage("signup")} />
          ) : (
            <SignUpPage handleSignUp={() => setPage("login")} />
          )}
          <p>Copyright © 2021 Jira. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
