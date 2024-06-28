import { Get, Post, axiosInstance } from "./index";
import axios from "axios";
// import { Cookies } from "react-cookie";

export const authNaverUser = async (code) => {
  try {
    const res = await Get(`/api/oauth/kakao?code=${code}`);

    if (res.status === 200) {
      const { accessToken, refreshToken } = res.data.data[0];
      console.log(accessToken, refreshToken);
      onLogInSuccess(accessToken, refreshToken);

      return res.data;
    }
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError && error.response) {
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

export const issueAccessToken = async () => {
  // TODO: 로그인 완성 시 쿠키에 저장된 토큰을 사용.
  // const cookies = new Cookies();
  // const refreshToken = cookies.get('refreshToken');
  const refreshToken = process.env.REACT_APP_REFRESHTOKEN;

  if (refreshToken && refreshToken.length > 0) {
    try {
      const res = await Post("/api/v1/auth/reissue", {
        refreshToken: refreshToken,
      });
      if (res.status == 200) {
        // const { accessToken } = res.data.data[0];
        // onLogInSuccess(accessToken, refreshToken); //토큰 갱신
        console.log(res);
      }
    } catch (error) {
      console.log(error); // log
      if (axios.isAxiosError(error) && error.response) {
        const errorCode = error.response.data.errorCode;
        const message = error.response.data.message;

        console.log(`${errorCode}: ${message}`); // log

        alert("로그인 후 이용해주세요.");
        window.location.href = "/auth";
      }
    }
  } else {
    alert("로그인 후 이용해주세요.");
    window.location.href = "/auth";
  }
};
