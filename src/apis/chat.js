import axios from "axios";
import { Get, Post, Delete } from ".";

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
      console.log(error);
      // 예시 데이터
      return [
        {
          chatRoomId: 1,
          assistantId: "asst_uXaZHnWAxMtFh9YMq2DfNynx",
          threadId: "thread_YoOhrxQTRicnNyeO4ZEJAYql",
          reportYear: 2022,
          reportCompany: "기아",
          reportType: "사업보고서",
        },
        {
          chatRoomId: 2,
          assistantId: "asst_uXaZHnWAxMtFh9YMq2DfNynx",
          threadId: "thread_YoOhrxQTRicnNyeO4ZEJAYql",
          reportYear: 2022,
          reportCompany: "삼성전자111111111111111111111",
          reportType: "사업보고서",
        },
      ];
    }
  }
};

export const deleteThread = async (chatRoomId) => {
  try {
    const res = await Delete(`/api/v1/chats/${chatRoomId}`);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
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
      console.log(error);
      // 예시 데이터
      return [
        {
          time: "2024-06-06 23:34:20",
          question: "1+1은?",
          answer: "2야",
        },
        {
          time: "2024-06-29 04:33:56",
          question: "두번째 질문",
          answer: "두번째 답",
        },
      ];
    }
  }
};
