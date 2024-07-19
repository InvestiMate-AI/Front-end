import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { GlobalStyle } from "./styles/global.style";
import { Cookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./contexts/UserState";
import Home from "./pages/HomePage";
import Chat from "./pages/ChatPage";
import Auth from "./pages/AuthPage";
import ChatRoom from "./pages/ChatRoomPage";

function App() {
  const cookie = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refreshToken = "happy";
    // const refreshToken = cookie.get("refresh");

    if (refreshToken && refreshToken.length > 0) {
      // 사용자가 로그인한 상태라면 isLoggedIn을 true로 설정
      setIsLoggedIn(true);
    }
    setLoading(false); // 상태 업데이트가 완료된 후 로딩 상태를 false로 설정
  }, [setIsLoggedIn]);

  useEffect(() => {
    console.log("isLoggedIn status:", isLoggedIn);
  }, [isLoggedIn]);

  // 로그인 상태에 따른 페이지 접근 제어
  const PrivateRoute = ({ children }) => {
    const location = useLocation();
    if (loading) return null; // 로딩 중일 때는 아무것도 렌더링하지 않음
    return isLoggedIn ? (
      children
    ) : (
      <Navigate to="/auth" state={{ from: location }} />
    );
  };

  const PublicRoute = ({ children }) => {
    if (loading) return null; // 로딩 중일 때는 아무것도 렌더링하지 않음
    return isLoggedIn ? <Navigate to="/" /> : children;
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat/:chatRoomId"
            element={
              <PrivateRoute>
                <ChatRoom />
              </PrivateRoute>
            }
          />
          <Route
            path="/feature2"
            element={
              <PrivateRoute>
                <div>안녕</div>
              </PrivateRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <Auth />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
