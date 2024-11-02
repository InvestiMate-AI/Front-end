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
        <ol className="auth-button-list" style={{ width: "100%" }}>
          <li style={{ width: "400px" }}>
            <button
              className="auth-button"
              onClick={handleNaverLogin}
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                backgroundColor: "#03C75A",
                margin: "0 0 1rem 0",
              }}
            >
              <img
                src={naverIcon}
                alt="naver-logo"
                style={{ marginRight: "5px" }}
              />
              네이버로 시작하기
            </button>

            <button
              className="auth-button"
              onClick={handleGoogleLogin}
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                backgroundColor: "#f5f5f5",
                margin: "0 0 1rem 0",
              }}
            >
              <img
                src={googleIcon}
                alt="google-logo"
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
