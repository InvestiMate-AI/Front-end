import axios from "axios";
import { Get, Post } from ".";

export const createThread = async (reportYear, companyName, reportType) => {
  try {
    const token = process.env.REACT_APP_ACCESSTOKEN;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await Post(
      "/api/v1/chats/thread",
      {
        year: reportYear,
        companyName: companyName,
        reportType: reportType,
      },
      config
    );
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`); // log
    }
  }
};

// getThreads 함수에서 Authorization 헤더 설정
export const getThreads = async () => {
  try {
    const token = process.env.REACT_APP_ACCESSTOKEN;
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

export const saveMessages = async (question, answer, chatRoomId) => {
  try {
    const token = process.env.REACT_APP_ACCESSTOKEN;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await Post(
      `/api/v1/chats/${chatRoomId}`,
      {
        question: question,
        answer: answer,
      },
      config
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`); // log
    }
  }
};

export const getMessages = async (chatRoomId) => {
  try {
    const token = process.env.REACT_APP_ACCESSTOKEN;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await Get(`/api/v1/chats/${chatRoomId}`, config);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`); // log
    }
  }
};
