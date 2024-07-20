import React, { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";

// Context 생성
const AuthContext = createContext();

// Provider 생성
export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["refresh"]);
  const [refresh, setRefresh] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.refresh);

  useEffect(() => {
    const token = cookies.refresh;
    if (token) {
      setRefresh(token);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies.refresh]);

  useEffect(() => {
    console.log(`isloggedIn: ${isLoggedIn}`);
  }, [isLoggedIn]);

  const handleLogin = () => {
    // window.location.href = "/auth";
  };

  const handleLogout = () => {
    removeCookie("refresh", { path: "/" });
    setRefresh(null);
    setIsLoggedIn(false);
  };

  return (
    <CookiesProvider>
      <AuthContext.Provider
        value={{ refresh, isLoggedIn, handleLogin, handleLogout }}
      >
        {children}
      </AuthContext.Provider>
    </CookiesProvider>
  );
};

// Context를 사용하는 커스텀 훅
export const useAuth = () => {
  return useContext(AuthContext);
};
