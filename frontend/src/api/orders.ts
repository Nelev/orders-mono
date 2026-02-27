import axios, { AxiosResponse } from "axios";
import { IOrder } from "../model/order";

const apiUrl = process.env.REACT_APP_API_URL;

export const getNewOrders = async (): Promise<IOrder[]> => {
  try {
    const response: AxiosResponse<IOrder[]> = await axios.get(
      `${apiUrl}/orders`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
