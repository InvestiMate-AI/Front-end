import React, { createContext, useContext, useState, useEffect } from "react";
import { useCookies, Cookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";
import { onSilentRefresh, logout } from "../apis/user";

// Context 생성
const AuthContext = createContext();

// Provider 생성
export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  // const [cookies, setCookie, removeCookie] = useCookies(["refresh", "access"]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.refresh);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    console.log(`isloggedIn: ${isLoggedIn}`);
  }, [isLoggedIn]);

  const handleLogin = () => {
    // window.location.href = "/auth";
  };

  const handleLogout = () => {
    logout(cookies.refresh);
    cookies.remove("refresh");
    cookies.remove("access");

    setIsLoggedIn(false);
  };

  return (
    <CookiesProvider>
      <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
        {children}
      </AuthContext.Provider>
    </CookiesProvider>
  );
};

// Context를 사용하는 커스텀 훅
export const useAuth = () => {
  return useContext(AuthContext);
};
