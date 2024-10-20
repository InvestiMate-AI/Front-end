import axios from "axios";
import { Get, Post, Delete } from ".";

export const createRecords = async ({ date, name, volume, type }) => {
  try {
    const res = await Post("/api/v1/stock-records", {
      date: date,
      name: name,
      volume: volume,
      type: type,
    });
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // console.log(error);
    }
  }
};

export const getRecords = async () => {
  try {
    const res = await Get("/api/v1/stock-records");
    return res.data.StockRecord;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // console.log(error);
    }
  }
};

export const deleteMessages = async (chatRoomId) => {
  try {
    const res = await Delete(`/api/v1/stock-records`);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // console.log(error);
    }
  }
};
