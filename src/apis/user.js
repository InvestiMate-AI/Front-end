import { Get, Post, axiosInstance } from "./index";
import axios from "axios";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";

export const checkAuth = async () => {
  try {
    const res = await Get(`/api/v1/members`);

    if (res.status === 200) {
      // const { accessToken, refreshToken } = res.data.data[0];
      // // console.log(accessToken, refreshToken);
      // onLogInSuccess(accessToken, refreshToken);

      return res.data;
    }
  } catch (error) {
    if (axios.isAxiosError && error.response) {
      console.log(error);
    }
  }
};

const onLogInSuccess = (accessToken, refreshToken) => {
  // const cookie = new Cookies();
  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`;
  // cookie.set("refresh", refreshToken);
  // cookie.set("access", accessToken);
};

export const onSilentRefresh = async () => {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refresh");

  if (refreshToken && refreshToken.length > 0) {
    try {
      const res = await Post("/api/v1/auth/reissue", {
        refreshToken: refreshToken,
      });
      if (res.status == 200) {
        const { accessToken } = res.data.data;
        onLogInSuccess(accessToken, refreshToken); //토큰 갱신
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error);
        // alert("로그인 후 이용해주세요.");
        // window.location.href = "/auth";
      }
    }
  } else {
    // alert("로그인 후 이용해주세요.");
    // window.location.href = "/auth";
  }
};

export const logout = async (refreshToken) => {
  try {
    const res = await Post("/logout", { Cookie: `refresh=${refreshToken}` });
    return res.data;
  } catch (error) {
    // console.log(error);
  }
};
