import { Get, Post, Patch, axiosInstance } from "./index";
import axios from "axios";
import { CommonError } from "../@types/api";
import { Cookies } from "react-cookie";
import { PostInfoBox } from "../styles/drawer.style";

export const authNaverUser = async (code) => {
  try {
    const res = await Get(`/api/oauth/kakao?code=${code}`);

    if (res.status == 200) {
      const { accessToken, refreshToken } = res.data.data[0];
      console.log(accessToken, refreshToken);
      onLogInSuccess(accessToken, refreshToken);

      return res.data;
    }
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError < CommonError > error && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
    }
  }
};

const onLogInSuccess = (accessToken, refreshToken) => {
  //accessToken 헤더에 설정
  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`;
  // refreshToken을 쿠키에 저장
  document.cookie = `refreshToken=${refreshToken}; path=/; `;
};
