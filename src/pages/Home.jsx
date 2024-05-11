import React, { useState, useEffect } from "react";
// import DefaultLayout from "../components/DefaultLayout";
import * as H from "../styles/home.style";
import DefaultLayout from "../components/DefaultLayout";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <DefaultLayout>
        <div>
          <button onClick={() => handleLoginClick("auth")}>로그인</button>
        </div>
        <div>
          <button onClick={() => handleLoginClick("chats")}>메인으로</button>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Home;
