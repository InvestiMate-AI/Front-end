import axios from "axios";
import { Get, Post, Delete } from ".";

export const postRecord = async (data) => {
  try {
    const res = await Post("/api/v1/stock-records", data);
    return res.data.data;
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
