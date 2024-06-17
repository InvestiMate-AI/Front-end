import axios from "axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { requestRefreshToken } from "./user";

// axios instance 생성
export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 토큰 만료 시 토큰 생성 후 재요청
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; //재시도 플래그 설정
      return requestRefreshToken().then(() => {
        return axiosInstance(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export const Get = async (url, config = {}) => {
  const response = await axiosInstance.get(url, config);
  return response;
};

export const Post = async (url, data, config) => {
  const response = await axiosInstance.get(url, data, config);
  return response;
};

export const Delete = async (url, data, config) => {
  const response = await axiosInstance.delete(url, data, config);
  return response;
};

export const Patch = async (url, data, config) => {
  const response = await axiosInstance.patch(url, data, config);
  return response;
};

export const Put = async (url, data, config) => {
  const response = await axiosInstance.put(url, data, config);
  return response;
};
