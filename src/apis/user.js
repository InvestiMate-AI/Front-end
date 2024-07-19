import { Post, axiosInstance } from "./index";
import axios from "axios";
import { Cookies } from "react-cookie";

// export const authNaverUser = async (code) => {
//   try {
//     const res = await Get(`/api/oauth/kakao?code=${code}`);

//     if (res.status === 200) {
//       const { accessToken, refreshToken } = res.data.data[0];
//       // console.log(accessToken, refreshToken);
//       onLogInSuccess(accessToken, refreshToken);

//       return res.data;
//     }
//   } catch (error) {
//     if (axios.isAxiosError && error.response) {
//       // console.log(error);
//     }
//   }
// };

const onLogInSuccess = (accessToken, refreshToken) => {
  axiosInstance.defaults.headers.common["Authorization"] =
    `Bearer ${accessToken}`;
  document.cookie = `refreshToken=${refreshToken}; path=/; `;
};

export const onSilentRefresh = async () => {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refreshToken");

  if (refreshToken && refreshToken.length > 0) {
    try {
      const res = await Post("/api/v1/auth/reissue", {
        refreshToken: refreshToken,
      });
      if (res.status == 200) {
        const { accessToken } = res.data.data[0];
        onLogInSuccess(accessToken, refreshToken); //토큰 갱신
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // console.log(error);

        alert("로그인 후 이용해주세요.");
        window.location.href = "/auth";
      }
    }
  } else {
    // alert("로그인 후 이용해주세요.");
    window.location.href = "/auth";
  }
};

export const logout = async () => {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refreshToken");

  if (refreshToken && refreshToken.length > 0) {
    try {
      const res = await Post("/logout", {
        Cookie: `refresh=${refreshToken}`,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // console.log(error);
      }
    }
  }
};
