import React, { useState, useEffect } from "react";
// import DefaultLayout from "../components/DefaultLayout";
import * as A from "../styles/auth.style";
import naverIcon from "../assets/naver-icon.svg";
import googleIcon from "../assets/google-icon.svg";

import DefaultLayout from "../components/DefaultLayout";

function Auth() {
  return (
    <>
      <A.Header>
        <button className="button">INVESTIMATE</button>
      </A.Header>
      <A.MainLayout>
        빠르게 시작하세요
        <ol className="auth-button-list">
          <li>
            <button
              className="auth-button"
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

export default Auth;
