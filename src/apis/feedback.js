import axios from "axios";
import { Get, Post, Delete } from ".";

// 피드백을 생성할 수 있는 주식 기록들 조회
/* 요청 결과 데이터 예시
data: [
  {
    "stockRecordId": Number(999),
    "date": String("2024-01-01"),
    "name": String("삼성전자"),
    "volume": Number(101),
    "type": String("매도"),
  },
]
*/
export const getFeedbackableStockRecords = async (data) => {
  try {
    const res = await Get("/api/v1/feedback");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return [];
  }
};

// 이미 피드백이 생성된 거래 기록 조회
/* 요청 결과 데이터 예시
data: [
  {
    "stockRecordId": Number(999),
    "date": String("2024-01-01"),
    "name": String("삼성전자"),
    "volume": Number(101),
    "type": String("매도"),
  },
]
*/
export const getStockRecordsWithFeedback = async () => {
  try {
    const res = await Get("/api/v1/feedback/already");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return [];
  }
};

// 특정 거래 기록에 대해 생성된 피드백 조회
/* 요청 결과 데이터 예시
data: [
  {
    "index": Number(0, 1, 2, ...),
    "type": String("table", "chart", "text"),
    "data": Stringified JSON (table,chart인 경우) 또는 String(text인 경우)
  },
]
*/
export const getFeedback = async (stockRecordId) => {
  try {
    const res = await Get(`/api/v1/feedback/${stockRecordId}`);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return [];
  }
};

// 특정 거래 기록에 대해 피드백 생성
// 요청 결과: { "status": 201, "success": true, "message": "피드백 저장 성공" }
export const createFeedback = async (stockRecordId) => {
  try {
    const res = await Post(`/api/v1/feedback/py/${stockRecordId}`);
    return res.data.success;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return false;
  }
};
