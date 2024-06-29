import React, { useEffect } from "react";
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

  useEffect(() => {
    const refreshToken = cookie.get("refreshToken");
    if (refreshToken && refreshToken.length > 0) {
      // 사용자가 로그인한 상태라면 isLoggedIn을 true로 설정
      setIsLoggedIn(true);
    }
  }, []);

  // 로그인 상태에 따른 페이지 접근 제어
  const PrivateRoute = ({ children }) => {
    const location = useLocation();
    return isLoggedIn ? (
      children
    ) : (
      <Navigate to="/auth" state={{ from: location }} />
    );
  };

  const PublicRoute = ({ children }) => {
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
