import axios from "axios";
import { Get, Post, Delete, Patch, Put } from ".";

// export const getDistrictPosts = async (districtId: number) => {
//     try {
//       const res = await Get<CardData[]>(`/api/districts/${districtId}/posts`);
//       if (res.status == 204) {
//         return [];
//       }
//       return res.data.data;
//     } catch (error) {
//       if (axios.isAxiosError<CommonError>(error) && error.response) {
//         const errorCode = error.response.data.errorCode;
//         const message = error.response.data.message;
//         console.log(`${errorCode}: ${message}`);
//       }
//     }
//   };

// getThreads 함수에서 Authorization 헤더 설정
export const getThreads = async () => {
  try {
    const token = process.env.REACT_APP_REFRESHTOKEN;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await Get("/api/v1/chats", config);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`); // log
    }
  }
};
