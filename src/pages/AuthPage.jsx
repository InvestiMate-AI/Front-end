import React, { useEffect } from "react";
import * as A from "../styles/auth.style";
import naverIcon from "../assets/naver-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // URI에서 인증 코드 또는 토큰을 처리하는 함수
    const handleAuthResponse = () => {
      // URI에서 쿼리 파라미터 가져오기
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const state = params.get("state");

      // 예시: 인증 코드나 토큰을 받아 처리하는 로직
      if (code) {
        // 여기서 accessToken과 refreshToken을 쿠키에 저장할 수 있음 (서버와의 통신 필요)

        // 로그인 완료 후 메인 페이지로 이동
        navigate("/chat");
      } else {
        // 예외 처리 등
        console.error("Authentication failed or no code received.");
      }
    };

    handleAuthResponse();
  }, [navigate]);

  const handleNaverLogin = () => {
    window.location.href =
      "http://54.180.196.124:80/oauth2/authorization/naver";
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "http://54.180.196.124:80/oauth2/authorization/google";
  };

  const handleHomeButtonClick = () => {
    navigate("/chat");
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
