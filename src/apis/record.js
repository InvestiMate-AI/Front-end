import axios from "axios";
import { Get, Post, Delete } from ".";

export const postRecord = async (data) => {
  try {
    const res = await Post("/api/v1/stock-records", data);
    return res.data.success;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
  }
};

export const getRecords = async () => {
  try {
    const res = await Get("/api/v1/stock-records");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
      // 예시 데이터
      return [
        {
          stockRecordId: 99,
          date: "2024-05-05",
          name: "삼성전자",
          volume: 100,
          type: "매수",
        },
        {
          stockRecordId: 111,
          date: "2024-09-05",
          name: "LG디스플레이",
          volume: 300,
          type: "매수",
        },
        {
          stockRecordId: 999,
          date: "2024-03-05",
          name: "KT&G",
          volume: 10,
          type: "매도",
        },
      ];
    }
  }
};

export const deleteRecord = async (recordId) => {
  try {
    const res = await Delete(`/api/v1/stock-records/${recordId}`);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
  }
};
