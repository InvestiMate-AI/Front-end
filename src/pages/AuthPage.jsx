import React, { useEffect } from "react";
import * as A from "../styles/auth.style";
import naverIcon from "../assets/naver-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();

  const handleNaverLogin = () => {
    window.location.href =
      "http://54.180.196.124:80/oauth2/authorization/naver";
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "http://54.180.196.124:80/oauth2/authorization/google";
  };

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <A.Header>
        <A.HomeButton onClick={handleHomeButtonClick}>INVESTIMATE</A.HomeButton>
      </A.Header>
      <A.MainLayout>
        빠르게 시작하세요
        <ol className="auth-button-list">
          <li>
            <button
              className="auth-button"
              onClick={handleNaverLogin}
              style={{ backgroundColor: "#03C75A" }}
            >
              <img
                src={naverIcon}
                alt="naver-logo"
                style={{ marginRight: "5px" }}
              />
              네이버로 시작하기
            </button>
          </li>
          <li>
            <button
              className="auth-button"
              style={{ backgroundColor: "rgb(245, 245, 245)" }}
              disabled
            >
              <img
                src={googleIcon}
                alt="naver-logo"
                style={{ marginRight: "5px" }}
              />
              구글로 시작하기
            </button>
          </li>
        </ol>
      </A.MainLayout>
    </>
  );
}

export default AuthPage;
