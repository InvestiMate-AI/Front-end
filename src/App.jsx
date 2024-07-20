import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
// import { BrowserRouter, Router, Route, Switch, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global.style";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "./contexts/UserState";
import Home from "./pages/HomePage";
import Chat from "./pages/ChatPage";
import Auth from "./pages/AuthPage";
import ChatRoom from "./pages/ChatRoomPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  // const [cookies, setCookie, removeCookie] = useCookies(["refresh"]);
  // const [refreshToken, setRefreshToken] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [loading, setLoading] = useState(true);

  // 쿠키에 리프레시가 존재하는지 안하는지 확인
  // 존재하고, 유효하면, setIsLoggedIn = true;
  // 아니면 x

  // useEffect(() => {
  //   getCookieFunc();
  // });

  // const getCookieFunc = () => {
  //   setRefreshToken(cookies.refresh);
  // };

  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, [refreshToken, setIsLoggedIn]);

  // useEffect(() => {
  //   setCookie("refresh", 14);
  //   const refreshToken = cookies.refresh;
  //   console.log(refreshToken);

  //   if (refreshToken && refreshToken.length > 0) {
  //     // 사용자가 로그인한 상태라면 isLoggedIn을 true로 설정
  //     console.log("hello");
  //     setIsLoggedIn(true);
  //   }

  //   setLoading(false); // 상태 업데이트가 완료된 후 로딩 상태를 false로 설정
  // }, [cookies.refresh, setCookie, setIsLoggedIn]);

  // // isLoggedIn 상태 업데이트 이후의 값을 확인하기 위한 별도 useEffect
  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);

  // 로그인 상태에 따른 페이지 접근 제어
  // const PrivateRoute = ({ children }) => {
  //   const location = useLocation();
  //   if (loading) return null; // 로딩 중일 때는 아무것도 렌더링하지 않음
  //   return isLoggedIn ? (
  //     children
  //   ) : (
  //     <Navigate to="/auth" state={{ from: location }} />
  //   );
  // };

  // const PublicRoute = ({ children }) => {
  //   if (loading) return null; // 로딩 중일 때는 아무것도 렌더링하지 않음
  //   return isLoggedIn ? <Navigate to="/" /> : children;
  // };

  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          {/* <Routes> */}
          {/* <Route path="/" element={<Home />} />
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
          </Routes> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/chat/:chatRoomId" element={<ChatRoom />} />
              <Route path="/chat" element={<Chat />} />
              <Route
                path="feature2"
                element={
                  <>
                    <h1>Hello</h1>
                  </>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
