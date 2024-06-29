import axios from "axios";
import { Get, Post } from ".";

export const createThread = async (reportYear, companyName, reportType) => {
  try {
    const res = await Post("/api/v1/chats/thread", {
      year: reportYear,
      companyName: companyName,
      reportType: reportType,
    });
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // console.log(error);
    }
  }
};

// getThreads 함수에서 Authorization 헤더 설정
export const getThreads = async () => {
  try {
    const res = await Get("/api/v1/chats");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // console.log(error);
    }
  }
};

export const saveMessages = async (question, answer, chatRoomId) => {
  try {
    const res = await Post(`/api/v1/chats/${chatRoomId}`, {
      question: question,
      answer: answer,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // console.log(error);
    }
  }
};

export const getMessages = async (chatRoomId) => {
  try {
    const res = await Get(`/api/v1/chats/${chatRoomId}`);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // console.log(error);
    }
  }
};
