import axios from "axios";
import { Post } from ".";

// 사용자 입력 데이터 기반 시뮬레이션 생성
/* 입력 데이터 예시 
data: [
]
*/
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
export const fetchSimulationResult = async (data) => {
  try {
    const res = await Post("/api/v1/simulation");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.log(error);
    }
    return [
      {
        stockRecordId: Number(999),
        date: String("2024-01-01"),
        name: String("피드백안받은 회사"),
        volume: Number(101),
        type: String("매도"),
      },
    ];
  }
};
